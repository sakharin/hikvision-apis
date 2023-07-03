import { Camera } from './camera';
import { CPU } from './cpu';
import { Datetime } from './datetime';
import { DomeInfo } from './dome_info';
import { Fan } from './fan';
import { Memory } from './memory';
import { Pressure } from './pressure';
import { Tamper } from './tamper';
import { Temperature } from './temperature';

export interface DeviceStatus {
  DeviceStatus: {
    currentDeviceTime?: Datetime;
    deviceUpTime?: number;
    TemperatureList?: Temperature[];
    FanList?: Fan[];
    PressureList?: Pressure[];
    TamperList?: Tamper[];
    CPUList?: CPU[];
    MemoryList?: Memory[];
    openFileHandles?: number;
    CameraList?: Camera[];
    DomeInfoList?: DomeInfo[];
  };
}
