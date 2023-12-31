<p align="center">
    <h1 align="center">HIKVISION APIs</h1>
</p>

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

The project contains a collection of ISAPI APIs from HIK Vision, described in [https://tpp.hikvision.com/Wiki/ISAPI/](https://tpp.hikvision.com/Wiki/ISAPI/), and allows the conversion of XML types to TypeScript types.

# Getting Started

Create an ISAPI instance.

```typescript
const instance = new ISAPI({
  host: '192.168.1.64',
  port: 80,
  username: 'admin',
  password: 'password',
});
```

Call api using url.

```typescript
import { PTZChannelList } from '@types';

const url = '/ISAPI/PTZCtrl/channels';
instance
  .get<PTZChannelList>(url)
  .then((res: PTZChannelList) => console.log(res))
  .catch((error: AxiosError<ResponseStatus>) =>
    console.error(error.response?.data),
  );
```

Or call provided apis.

```typescript
instance
  .getPTZCtrlChannels()
  .then((res: PTZChannelList) => console.log(res))
  .catch((error: AxiosError<ResponseStatus>) =>
    console.error(error.response?.data),
  );
```

The response is as follows.

```javascript
{
  PTZChannelList: {
    _attributes: {
      version: '2.0',
      xmlns: 'http://www.hikvision.com/ver20/XMLSchema'
    },
    PTZChannel: {
      _attributes: [Object],
      id: 1,
      enabled: true,
      videoInputID: 1,
      controlProtocol: 'PELCO-D',
      controlAddress: [Object],
      panSupport: true,
      tiltSupport: true,
      zoomSupport: false
    }
  }
}
```

Get xml response by calling get with `{ convert: false }` parameter.

```typescript
const url = '/ISAPI/PTZCtrl/channels';
await instance
  .get<string>(url, { convert: false })
  .then((res: string) => console.log(res))
  .catch((error: AxiosError) => console.error(error));
```

XML response.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PTZChannelList  version="2.0" xmlns="http://www.hikvision.com/ver20/XMLSchema">
<PTZChannel version="2.0" xmlns="http://www.hikvision.com/ver20/XMLSchema">
<id>1</id>
<enabled>true</enabled>
<videoInputID>1</videoInputID>
<controlProtocol>PELCO-D</controlProtocol>
<controlAddress>
<enabled>true</enabled>
<Address>0</Address>
</controlAddress>
<panSupport>true</panSupport>
<tiltSupport>true</tiltSupport>
<zoomSupport>false</zoomSupport>
</PTZChannel>
</PTZChannelList >
```

# Document

Clone the repo and run docs script.

```sh
git clone git@github.com:sakharin/hikvision-apis.git
cd hikvision-apis
npm install
npm run doc
```

Then open `docs/index.html`.

# References

The project structure is modified from [tomchen/example-typescript-package](https://github.com/tomchen/example-typescript-package).