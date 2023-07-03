import { UUID } from 'crypto';

import { DeviceType } from './device_type';

export interface DeviceInfo {
  DeviceInfo: {
    deviceName: string;
    deviceID: string | UUID;
    deviceDescription?: string;
    deviceLocation?: string;
    systemContact?: string;
    model: string;
    serialNumber: string;
    macAddress: string;
    firmwareVersion: string;
    firmwareReleasedDate?: string;
    bootVersion?: string;
    bootReleasedDate?: string;
    hardwareVersion?: string;
    encoderVersion?: string;
    encoderReleasedDate?: string;
    decoderVersion?: string;
    decoderReleasedDate?: string;
    deviceType: DeviceType;
    telecontrolID?: number;
    supportBeep?: boolean;
    firmwareVersionInfo?: string;
  };
}
