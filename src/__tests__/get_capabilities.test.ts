import axios, { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ISAPI from '@ISAPI';
import { DeviceCap, ResponseStatus } from '@types';

const config = {
  host: '192.168.1.64',
  port: 80,
  username: 'admin',
  password: 'password',
};
const instance = new ISAPI(config);

describe('getCapabilities', () => {
  const url = '/ISAPI/System/capabilities';
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('success cases', () => {
    const xmlResponse =
      '<?xml version="1.0" encoding="UTF-8"?>\r\n' +
      '<DeviceCap>\r\n' +
      '<SysCap>\r\n' +
      '<isSupportDst>true</isSupportDst>\r\n' +
      '</SysCap>\r\n' +
      '</DeviceCap>\r\n';
    const objectResponse = {
      DeviceCap: { SysCap: { isSupportDst: true } },
    };

    it('request object', async () => {
      mock.onGet(url).reply(200, xmlResponse);
      await instance.getCapabilities().then((result: DeviceCap) => {
        expect(result).toEqual(objectResponse);
      });
      expect(mock.history.get[0].url).toEqual(url);
    });

    it('request xml', async () => {
      mock.onGet(url).reply(200, xmlResponse);
      await instance
        .getCapabilities({ convert: false })
        .then((result: DeviceCap) => {
          expect(result).toEqual(xmlResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });
  });

  describe('fail cases', () => {
    const xmlResponse =
      '<?xml version="1.0" encoding="utf-8"?>\r\n' +
      '<ResponseStatus version="2.0" xmlns="http://www.std-cgi.org/ver20/XMLSchema">\r\n' +
      '<requestURL>/ISAPI/System/capabilities</requestURL>\r\n' +
      '<statusCode>4</statusCode>\r\n' +
      '<statusString>Invalid Operation</statusString>\r\n' +
      '<subStatusCode>notSupport</subStatusCode>\r\n' +
      '</ResponseStatus>\r\n';

    const objectResponse = {
      ResponseStatus: {
        _attributes: {
          version: '2.0',
          xmlns: 'http://www.std-cgi.org/ver20/XMLSchema',
        },
        requestURL: '/ISAPI/System/capabilities',
        statusCode: 4,
        statusString: 'Invalid Operation',
        subStatusCode: 'notSupport',
      },
    };

    it('request object', async () => {
      mock.onGet(url).reply(401, xmlResponse);
      await instance
        .getCapabilities()
        .catch((error: AxiosError<ResponseStatus>) => {
          expect(error.response).toHaveProperty('data');
          expect(error.response?.data).toEqual(objectResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });

    it('request xml', async () => {
      mock.onGet(url).reply(401, xmlResponse);
      await instance
        .getCapabilities({ convert: false })
        .catch((error: AxiosError<ResponseStatus>) => {
          expect(error.response).toHaveProperty('data');
          expect(error.response?.data).toEqual(xmlResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });
  });
});
