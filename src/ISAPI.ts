import axios, {
  AxiosBasicCredentials,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import xmljs, { ElementCompact } from 'xml-js';

import {
  DeviceCap,
  DeviceInfo,
  DeviceStatus,
  ResponseStatus,
  Time,
  userCheck,
} from '@types';
interface ISAPIConfig {
  host: string;
  port: string | number;
  username: string;
  password: string;
}

interface ExtraParams {
  convert?: boolean;
  config?: AxiosRequestConfig;
  headers?: RawAxiosRequestHeaders;
}

interface ISAPI {
  get: <T>(url: string, args?: ExtraParams) => Promise<T>;
  post: <T>(
    url: string,
    data?: object | string,
    args?: ExtraParams,
  ) => Promise<T>;
  put: <T>(
    url: string,
    data?: object | string,
    args?: ExtraParams,
  ) => Promise<T>;
  patch: <T>(
    url: string,
    data?: object | string,
    args?: ExtraParams,
  ) => Promise<T>;
  delete: <T>(url: string, args?: ExtraParams) => Promise<T>;

  // /ISAPI/Security
  getUserCheck: (args?: { convert?: boolean }) => Promise<userCheck>;

  // /ISAPI/System
  getCapabilities: (args?: { convert?: boolean }) => Promise<DeviceCap>;
  getDeviceInfo: (args?: { convert?: boolean }) => Promise<DeviceInfo>;
  getSystemStatus: (args?: { convert?: boolean }) => Promise<DeviceStatus>;
  getTime: (args?: { convert?: boolean }) => Promise<Time>;
  putTime: (
    time: Time | string,
    args?: { convert?: boolean },
  ) => Promise<ResponseStatus>;
}

export const nativeType = (value: string) => {
  const nValue = Number(value);
  if (!isNaN(nValue)) return nValue;
  const bValue = value.toLowerCase();
  if (bValue === 'true') return true;
  else if (bValue === 'false') return false;
  return value;
};

export const removeJsonTextAttribute = (
  value: string,
  parentElement: ElementCompact,
) => {
  try {
    const pOpKeys = Object.keys(parentElement._parent);
    const keyNo = pOpKeys.length;
    const keyName = pOpKeys[keyNo - 1];
    const arrOfKey = parentElement._parent[keyName];
    const arrOfKeyLen = arrOfKey.length;
    if (arrOfKeyLen > 0) {
      const arr = arrOfKey;
      const arrIndex = arrOfKey.length - 1;
      arr[arrIndex] = value;
    } else {
      parentElement._parent[keyName] = nativeType(value);
    }
  } catch (e) {
    //
  }
};

export default class Isapi implements ISAPI {
  private auth: AxiosBasicCredentials;
  private headers: RawAxiosRequestHeaders;
  private config: AxiosRequestConfig;
  private xml2jsOpt: xmljs.Options.XML2JS;
  private js2xmlOpt: xmljs.Options.JS2XML;

  constructor(args: ISAPIConfig) {
    const { host, port, username, password } = args;

    this.auth = { username, password };
    this.headers = { Accept: 'application/xml' };
    this.config = {
      auth: this.auth,
      baseURL: `http://${host}:${port}`,
    };

    this.xml2jsOpt = {
      compact: true,
      nativeType: false,
      ignoreDeclaration: true,
      textFn: removeJsonTextAttribute,
    };

    this.js2xmlOpt = {
      compact: true,
      ignoreComment: true,
      spaces: 2,
    };
  }

  public async get<T>(
    url: string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: ExtraParams = {},
  ): Promise<T> {
    return axios
      .get(url, { ...config, headers })
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        if (convert)
          error.response.data = xmljs.xml2js(
            error.response.data,
            this.xml2jsOpt,
          );
        throw error;
      });
  }

  public async post<T>(
    url: string,
    data?: object | string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: ExtraParams = {},
  ): Promise<T> {
    return axios
      .post(
        url,
        convert && typeof data === 'object'
          ? xmljs.js2xml(data, this.js2xmlOpt)
          : data
          ? data
          : undefined,
        { ...config, headers },
      )
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        if (convert)
          error.response.data = xmljs.xml2js(
            error.response.data,
            this.xml2jsOpt,
          );
        throw error;
      });
  }

  public async put<T>(
    url: string,
    data?: object | string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: ExtraParams = {},
  ): Promise<T> {
    return axios
      .put(
        url,
        convert && typeof data === 'object'
          ? xmljs.js2xml(data, this.js2xmlOpt)
          : data
          ? data
          : undefined,
        { ...config, headers },
      )
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        if (convert)
          error.response.data = xmljs.xml2js(
            error.response.data,
            this.xml2jsOpt,
          );
        throw error;
      });
  }

  public async patch<T>(
    url: string,
    data?: object | string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: ExtraParams = {},
  ): Promise<T> {
    return axios
      .patch(
        url,
        convert && typeof data === 'object'
          ? xmljs.js2xml(data, this.js2xmlOpt)
          : data,
        { ...config, headers },
      )
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        if (convert)
          error.response.data = xmljs.xml2js(
            error.response.data,
            this.xml2jsOpt,
          );
        throw error;
      });
  }

  public async delete<T>(
    url: string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: ExtraParams = {},
  ): Promise<T> {
    return axios
      .delete(url, { ...config, headers })
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        if (convert)
          error.response.data = xmljs.xml2js(
            error.response.data,
            this.xml2jsOpt,
          );
        throw error;
      });
  }

  // /ISAPI/Security
  public async getUserCheck({
    convert = true,
  }: { convert?: boolean } = {}): Promise<userCheck> {
    const url = '/ISAPI/Security/userCheck';
    return this.get<userCheck>(url, { convert });
  }

  // /ISAPI/System
  public async getCapabilities({
    convert = true,
  }: { convert?: boolean } = {}): Promise<DeviceCap> {
    const url = '/ISAPI/System/capabilities';
    return this.get<DeviceCap>(url, { convert });
  }
  public async getDeviceInfo({
    convert = true,
  }: { convert?: boolean } = {}): Promise<DeviceInfo> {
    const url = '/ISAPI/System/deviceInfo';
    return this.get<DeviceInfo>(url, { convert });
  }
  public async getSystemStatus({
    convert = true,
  }: { convert?: boolean } = {}): Promise<DeviceStatus> {
    const url = '/ISAPI/System/status';
    return this.get<DeviceStatus>(url, { convert });
  }
  public async getTime({
    convert = true,
  }: { convert?: boolean } = {}): Promise<Time> {
    const url = '/ISAPI/System/time';
    return this.get<Time>(url, { convert });
  }
  public async putTime(
    time: Time | string,
    { convert = true }: { convert?: boolean } = {},
  ): Promise<ResponseStatus> {
    const url = '/ISAPI/System/time';
    return this.put<ResponseStatus>(url, time, { convert });
  }
}
