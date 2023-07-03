import { AudioCap } from './audio_cap';
import { EventCap } from './event_cap';
import { IOCap } from './io_cap';
import { SecurityCap } from './security_cap';
import { SerialCap } from './serial_cap';
import { SmartCap } from './smart_cap';
import { ThermalCap } from './thermal_cap';
import { VideoCap } from './video_cap';
import { VideoIntercomCap } from './video_intercom_cap';
import { WLAlarmCap } from './wl_alarm_cap';

export interface DeviceCap {
  DeviceCap: {
    SysCap?: {
      isSupportDst?: boolean;
      NetworkCap?: boolean;
      IOCap?: IOCap;
      SerialCap?: SerialCap;
      VideoCap?: VideoCap;
      AudioCap?: AudioCap;
      isSupportExternalDevice?: boolean;
    };
    voicetalkNums?: number;
    isSupportSnapshot?: boolean;
    SecurityCap?: SecurityCap;
    EventCap?: EventCap;
    ImageCap?: unknown;
    RacmCap?: unknown;
    SmartCap?: SmartCap;
    ThermalCap?: ThermalCap;
    WLAlarmCap?: WLAlarmCap;
    isSupportGIS?: boolean;
    isSupportCompass?: boolean;
    isSupportRoadInfoOverlays?: boolean;
    isSupportFaceCaptureStatistics?: boolean;
    isSupportExternalDevice?: boolean;
    isSupportElectronicsEnlarge?: boolean;
    isSupportCloud?: boolean;
    isSupportRecordHost?: boolean;
    isSupportEagleEye?: boolean;
    isSupportPanorama?: boolean;
    isSupportFirmwareVersionInfo?: boolean;
    isSupportExternalWirelessServer?: boolean;
    isSupportSetupCalibration?: boolean;
    isSupportGetmutexFuncErrMsg?: boolean;
    isSupportlaserSpotManual?: boolean;
    isSupportLaserSpotAdjustment?: boolean;
    VideoIntercomCap?: VideoIntercomCap;
    SecurityCPCapabilities?: unknown;
  };
}
