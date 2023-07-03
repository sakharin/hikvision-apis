export interface PTZChannel {
  id: number;
  enabled: boolean;
  serialNumber: number;
  videoInputID: number;
  panMaxSpeed?: number;
  tiltMaxSpeed?: number;
  presetSpeed?: number;
  autoPatrolSpeed?: number;
  keyBoardControlSpeed?: number;
  controlProtocol?: string;
  controlAddress?: {
    enabled: boolean;
    Address?: string;
  };
  defaultPresetID?: string;
  PTZRs485Para?: {
    baudRate: number;
    dataBits: number;
    parityType: 'none' | 'even' | 'odd' | 'mark' | 'space';
    stopBits: '1' | '1.5' | '2';
    flowCtrl: 'none' | 'software' | 'hardware';
  };
  manualControlSpeed?:
    | 'pedestrian'
    | 'nonMotorVehicle'
    | 'motorVehicle'
    | 'selfadaptive'
    | 'compatible';
  panSupport?: boolean;
  tiltSupport?: boolean;
  zoomSupport?: boolean;
  PTPositiveDirection?: {
    pan?: 'left' | 'right';
    tile?: 'up' | 'down';
  };
}
