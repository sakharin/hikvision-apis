export interface VideoIntercomCap {
  isSupportRingManage?: boolean;
  isSupportPasswordAuthenticationa: boolean;
  isSupportCardSectorCheck: boolean;
  isSupportAlarmControlByPhone: boolean;
  SmartHomeManage: {
    isSupportRoomManage?: boolean;
    isSupportSmartDeviceManage?: boolean;
  };
  isSupportSceneManage?: boolean;
  isSupportZoneCfgByScene?: boolean;
  isSupportCallElevator: boolean;
  isSupportGetSmartLockParam: boolean;
  isSupportGetAnnouncementMessage: boolean;
  isSupportAppKeyConfiguration: boolean;
  isSupportDeviceId?: boolean;
  isSupportOperationTime?: boolean;
  isSupportRelatedDeviceAdress?: boolean;
  isSupportRemoteOpenDoor?: boolean;
  isSupportKeyCfg?: boolean;
  isSupportAlarmUploadCfg?: boolean;
  isSupportWorkModeCfg?: boolean;
}
