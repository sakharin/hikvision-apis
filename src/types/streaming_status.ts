import { StreamingSessionStatus } from './streaming_session_status';

export interface StreamingStatus {
  StreamingStatus: {
    totalStreamingSessions: number;
    StreamingSessionStatusList?: StreamingSessionStatus[];
  };
}
