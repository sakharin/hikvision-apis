export interface ResponseStatus {
  ResponseStatus: {
    requestURL: string;
    statusCode: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    statusString: string;
    subStatusCode:
      | 'ok'
      | 'riskPassword'
      | 'noMemory'
      | 'serviceUnavailable'
      | 'upgrading'
      | 'deviceBusy'
      | 'reConnectIpc'
      | 'deviceError'
      | 'badFlash'
      | '28181Uninitialized'
      | 'notSupport'
      | 'lowPrivilege'
      | 'badAuthorization'
      | 'methodNotAllowed'
      | 'notSetHdiskRedund'
      | 'invalidOperation'
      | 'notActivated'
      | 'hasActivated'
      | 'badXmlFormat'
      | 'badParameters'
      | 'badHostAddress'
      | 'badXmlContent'
      | 'badIPv4Address'
      | 'badIPv6Address'
      | 'conflictIPv4Address'
      | 'conflictIPv6Address'
      | 'badDomainName'
      | 'connectServerFail'
      | 'conflictDomainName'
      | 'badPort'
      | 'portError'
      | 'importErrorData'
      | 'badNetMask'
      | 'badVersion'
      | 'badDevType'
      | 'badLanguage'
      | 'incorrectUserNameOrPassword'
      | 'invalidStoragePoolOfCloudServer'
      | 'noFreeSpaceOfStoragePool'
      | 'riskPassword'
      | 'fileFormatError'
      | 'fileContentError'
      | 'UnSupportCapture'
      | 'unableCalibrate'
      | 'pleaseCalibrate'
      | 'SNMPv3PasswordNone'
      | 'SNMPv3NameDifferent'
      | 'notSupportDeicing'
      | 'notMeetDeicing'
      | 'alarmInputOccupied'
      | 'notSupportWithAPMode'
      | 'rebootRequired';
    lockStatus?: 'unlock' | 'locked';
    retryTimes?: number;
    resLockTime?: number;
  };
}
