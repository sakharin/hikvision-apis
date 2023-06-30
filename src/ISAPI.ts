import axios, {
  AxiosBasicCredentials,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from 'axios';
import xmljs, { ElementCompact } from 'xml-js';

import { userCheck } from '@types';

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

export default class ISAPI {
  private auth: AxiosBasicCredentials;
  private headers: RawAxiosRequestHeaders;
  private config: AxiosRequestConfig;
  private xml2jsOpt: xmljs.Options.XML2JS;
  private js2xmlOpt: xmljs.Options.JS2XML;

  constructor(args: {
    host: string;
    port: string | number;
    username: string;
    password: string;
  }) {
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
    }: {
      convert?: boolean;
      config?: AxiosRequestConfig;
      headers?: RawAxiosRequestHeaders;
    } = {},
  ): Promise<void | T> {
    return axios
      .get(url, { ...config, headers })
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        error.response.data = xmljs.xml2js(error.response.data, this.xml2jsOpt);
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
    }: {
      convert?: boolean;
      config?: AxiosRequestConfig;
      headers?: RawAxiosRequestHeaders;
    } = {},
  ): Promise<void | T> {
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
        error.response.data = xmljs.xml2js(error.response.data, this.xml2jsOpt);
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
    }: {
      convert?: boolean;
      config?: AxiosRequestConfig;
      headers?: RawAxiosRequestHeaders;
    } = {},
  ): Promise<void | T> {
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
        error.response.data = xmljs.xml2js(error.response.data, this.xml2jsOpt);
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
    }: {
      convert?: boolean;
      config?: AxiosRequestConfig;
      headers?: RawAxiosRequestHeaders;
    } = {},
  ): Promise<void | T> {
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
        error.response.data = xmljs.xml2js(error.response.data, this.xml2jsOpt);
        throw error;
      });
  }

  public async delete<T>(
    url: string,
    {
      convert = true,
      config = this.config,
      headers = this.headers,
    }: {
      convert?: boolean;
      config?: AxiosRequestConfig;
      headers?: RawAxiosRequestHeaders;
    } = {},
  ): Promise<void | T> {
    return axios
      .delete(url, { ...config, headers })
      .then((response) => response.data)
      .then((data) => {
        if (convert) return xmljs.xml2js(data, this.xml2jsOpt) as T;
        return data;
      })
      .catch((error) => {
        error.response.data = xmljs.xml2js(error.response.data, this.xml2jsOpt);
        throw error;
      });
  }

  // /ISAPI/Security
  public async getUserCheck(): Promise<void | userCheck> {
    const url = '/ISAPI/Security/userCheck';
    return this.get<userCheck>(url);
  }
}
