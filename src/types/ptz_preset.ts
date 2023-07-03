export interface PTZPreset {
  enabled: boolean;
  id: string;
  presetName: string;
  AbsoluteHigh: {
    elevation?: number;
    azimuth?: number;
    absoluteZoom?: number;
  };
}
