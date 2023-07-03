import { ControlProtocol } from './control_protocol';

export interface StreamingChannel {
  id: string;
  channelName: string;
  enabled: boolean;
  Transport: {
    maxPacketSize?: number;
    audioPacketLength?: number;
    audioInboundPacketLength?: number;
    audioInboundPortNo?: number;
    videoSourcePortNo?: number;
    audioSourcePortNo?: number;
    ControlProtocolList: {
      ControlProtocol: ControlProtocol[];
    };
    Unicast?: {
      enabled: boolean;
      interfaceID?: string;
      rtpTransportType?: 'RTP' | 'UDP' | 'RTP' | 'TCP';
    };
    Multicast?: {
      enabled: boolean;
      userTriggerThreshold?: number;
      destIPAddress?: string;
      videoDestPortNo?: number;
      audioDestPortNo?: number;
      destIPv6Address?: string;
      ttl?: number;
    };
    Security?: {
      enabled: boolean;
    };
  };
  Video?: {
    enabled: boolean;
    videoInputChannelID: string;
    videoCodecType:
      | 'MPEG4'
      | 'MJPEG'
      | '3GP'
      | 'H.264'
      | 'HK.264'
      | 'MPNG'
      | 'SVAC';
    videoScanType?: 'progressive' | 'interlaced';
    videoResolutionWidth: number;
    videoResolutionHeight: number;
    videoResolutionName?: '3MP' | '5MP' | 'none';
    videoPositionX?: number;
    videoPositionY?: number;
    videoQualityControlType?: 'CBR' | 'VBR';
    constantBitRate?: number;
    fixedQuality?: number;
    vbrUpperCap?: number;
    vbrLowerCap?: number;
    maxFrameRate: number;
    keyFrameInterval?: number;
    rotationDegree?: number;
    mirrorEnabled?: boolean;
    snapShotImageType?: 'JPEG' | 'GIF' | 'PNG';
    Mpeg4Profile?: 'SP' | 'ASP';
    H264Profile?: 'Baseline' | 'Main' | 'High' | 'Extended';
    SVACProfile?: 'Baseline' | 'Main' | 'High' | 'Extended';
    GovLength?: number;
    SVC: {
      enabled: boolean;
      SVCMode?: 'manual' | 'auto';
    };
    smoothing?: number;
    SmartCodec?: {
      enabled: boolean;
    };
    vbrAverageCap?: number;
  };
  Audio?: {
    enabled: boolean;
    audioInputChannelID: string;
    audioCompressionType:
      | 'G.711alaw'
      | 'G.711ulaw'
      | 'G.726'
      | 'G.729'
      | 'G.729a'
      | 'G.729b'
      | 'PCM'
      | 'MP3'
      | 'AC3'
      | 'AAC'
      | 'ADPCM'
      | 'MP2L2';
    audioInboundCompressionType?:
      | 'G.711alaw'
      | 'G.711ulaw'
      | 'G.726'
      | 'G.729'
      | 'G.729a'
      | 'G.729b'
      | 'PCM'
      | 'MP3'
      | 'AC3'
      | 'AAC'
      | 'ADPCM'
      | 'MP2L2';
    audioBitRate?: number;
    audioSamplingRate?: number;
    audioResolution?: number;
    VoiceChanger?: {
      enabled: boolean;
      level: number;
    };
  };
  enableCABAC?: boolean;
  subStreamRecStatus?: boolean;
}
