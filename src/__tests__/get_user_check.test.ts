import axios, { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import Isapi from '@ISAPI';
import { ResponseStatus, userCheck } from '@types';

const config = {
  host: '192.168.1.64',
  port: 80,
  username: 'admin',
  password: 'password',
};
const instance = new Isapi(config);

describe('getUserCheck', () => {
  const url = '/ISAPI/Security/userCheck';
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
      '<userCheck>\r\n' +
      '<statusValue>200</statusValue>\r\n' +
      '<statusString>OK</statusString>\r\n' +
      '</userCheck>\r\n';
    const objectResponse = {
      userCheck: { statusValue: 200, statusString: 'OK' },
    };

    it('request object', async () => {
      mock.onGet(url).reply(200, xmlResponse);
      await instance.getUserCheck().then((result: userCheck) => {
        expect(result).toEqual(objectResponse);
      });
      expect(mock.history.get[0].url).toEqual(url);
    });

    it('request xml', async () => {
      mock.onGet(url).reply(200, xmlResponse);
      await instance
        .getUserCheck({ convert: false })
        .then((result: userCheck) => {
          expect(result).toEqual(xmlResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });
  });

  describe('fail cases', () => {
    const xmlResponse =
      '<?xml version="1.0" encoding="utf-8"?>\r\n' +
      '<ResponseStatus version="2.0" xmlns="http://www.std-cgi.org/ver20/XMLSchema">\r\n' +
      '<requestURL>/ISAPI/Security/userCheck</requestURL>\r\n' +
      '<statusCode>6</statusCode>\r\n' +
      '<statusString>Invalid XML Content</statusString>\r\n' +
      '<subStatusCode>incorrectUserNameOrPassword</subStatusCode>\r\n' +
      '</ResponseStatus>\r\n';

    const objectResponse = {
      ResponseStatus: {
        _attributes: {
          version: '2.0',
          xmlns: 'http://www.std-cgi.org/ver20/XMLSchema',
        },
        requestURL: '/ISAPI/Security/userCheck',
        statusCode: 6,
        statusString: 'Invalid XML Content',
        subStatusCode: 'incorrectUserNameOrPassword',
      },
    };

    it('request object', async () => {
      mock.onGet(url).reply(401, xmlResponse);
      await instance
        .getUserCheck()
        .catch((error: AxiosError<ResponseStatus>) => {
          expect(error.response).toHaveProperty('data');
          expect(error.response?.data).toEqual(objectResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });

    it('request xml', async () => {
      mock.onGet(url).reply(401, xmlResponse);
      await instance
        .getUserCheck({ convert: false })
        .catch((error: AxiosError<ResponseStatus>) => {
          expect(error.response).toHaveProperty('data');
          expect(error.response?.data).toEqual(xmlResponse);
        });
      expect(mock.history.get[0].url).toEqual(url);
    });
  });
});
