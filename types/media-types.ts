import { ResizingType } from 'imgproxy/dist/types';

export interface ICDNOption {
  width?: number;
  height?: number;
  resizingType?: ResizingType;
  enlarge?: boolean;
}