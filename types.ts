
export enum ImageFormat {
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
}

export interface Conversion {
  from: ImageFormat;
  to: ImageFormat;
  path: string;
}

export type Theme = 'light' | 'dark';
