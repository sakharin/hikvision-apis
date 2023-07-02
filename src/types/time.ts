import { Datetime } from './datetime';

export interface Time {
  Time: {
    timeMode: 'NTP' | 'manual' | 'timecorrect';
    localTime: Datetime;
    timeZone: string;
  };
}
