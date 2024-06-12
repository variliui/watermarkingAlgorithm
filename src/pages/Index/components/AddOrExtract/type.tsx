export enum ELight {
  DIV = 'div',
  CANVAS = 'canvas',
  SVG = 'svg',
}

export const lightList = [
  {
    tab: ELight.DIV,
    key: ELight.DIV,
  },
  {
    tab: ELight.CANVAS,
    key: ELight.CANVAS,
  },
  {
    tab: ELight.SVG,
    key: ELight.SVG,
  },
];

export enum EDark {
  BLANKRAREA = '空域',
  DCT = '变换域DCT',
  DFT = '变换域DFT',
  DWT = '变换域DWT',
  TEXT = '文本',
  LSB = '音频LSB',
  MDCT = '音频MDCT',
  MCLT = '音频MCLT',
  ECHO = '回声',
}

export const darkList = [
  {
    tab: EDark.BLANKRAREA,
    key: EDark.BLANKRAREA,
  },
  {
    tab: EDark.DCT,
    key: EDark.DCT,
  },
  {
    tab: EDark.DFT,
    key: EDark.DFT,
  },
  {
    tab: EDark.DWT,
    key: EDark.DWT,
  },
  {
    tab: EDark.TEXT,
    key: EDark.TEXT,
  },
  {
    tab: EDark.LSB,
    key: EDark.LSB,
  },
  {
    tab: EDark.MDCT,
    key: EDark.MDCT,
  },
  {
    tab: EDark.MCLT,
    key: EDark.MCLT,
  },
  {
    tab: EDark.ECHO,
    key: EDark.ECHO,
  },
];
