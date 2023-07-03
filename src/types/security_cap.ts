export interface SecurityCap {
  supportUserNums?: number;
  userBondIpNums?: number;
  userBondMacNums?: number;
  issupIllegalLoginLock?: boolean;
  isSupportOnlineUser?: boolean;
  isSupportAnonymous?: boolean;
  securityVersion?: '1' | '2';
  keyIterateNum?: number;
  isSupportUserCheck?: boolean;
  isSupportGUIDFileDataExport?: boolean;
  isSupportSecurityQuestionConfig?: boolean;
  isSupportGetOnlineUserListSC?: boolean;
  SecurityLimits?: {
    LoginPasswordLenLimit?: number;
    SecurityAnswerLenLimit?: number;
  };
}
