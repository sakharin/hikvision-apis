export interface EventCap {
  isSupportHDFull?: boolean;
  isSupportHDError?: boolean;
  isSupportNicBroken?: boolean;
  isSupportIpConflict?: boolean;
  isSupportIllAccess?: boolean;
  isSupportViException?: boolean;
  isSupportViMismatch?: boolean;
  isSupportRecordException?: boolean;
  isSupportRaidException?: boolean;
  isSupportSpareException?: boolean;
  isSupportPoePowerException?: boolean;
  isSupportTriggerFocus?: boolean;
  isSupportMotionDetection?: boolean;
  isSupportVideoLoss?: boolean;
  isSupportTamperDetection?: boolean;
}
