export interface SmartCap {
  isSupportROI?: boolean;
  isSupportFaceDetect?: boolean;
  isSupportIntelliTrace?: boolean;
  isSupportFieldDetection?: boolean;
  isSupportDefocusDetection?: boolean;
  isSupportAudioDetection?: boolean;
  isSupportSceneChangeDetection?: boolean;
  isSupportLineDetection?: boolean;
  isSupportRegionEntrance?: boolean;
  isSupportRegionExiting?: boolean;
  isSupportLoitering?: boolean;
  isSupportGroup?: boolean;
  isSupportRapidMove?: boolean;
  isSupportParking?: boolean;
  isSupportUnattendedBaggage?: boolean;
  isSupportAttendedBaggage?: boolean;
  isSupportPeopleDetection?: boolean;
  isSupportStorageDetection?: boolean;
  isSupportShipsDetection?: boolean;
  isSupportSmartCalibration?: boolean;
}
