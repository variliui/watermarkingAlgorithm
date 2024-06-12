/**
 * div
 * 算法：
 *      水印生成方式为：div，通过 absolute 布局将div所处的层级提高，并降低透明度，
 *      从而实现将水印覆盖到原图上方并且不会太过明显影响原图信息。
 */

/**
 * canvas
 * 算法：
 *      水印生成方式为：canvas，通过 absolute 布局将div所处的层级提高，并降低透明度，
 *      从而实现将水印覆盖到原图上方并且不会太过明显影响原图信息。
 */

/**
 * svg
 * 算法：
 *      水印生成方式为：svg，通过 absolute 布局将div所处的层级提高，并降低透明度，
 *      从而实现将水印覆盖到原图上方并且不会太过明显影响原图信息。
 */

/**
 * 空域
 * 算法：
 *      1.通过canvas将原图转化为argb数组，同时用canvas绘制同等大小的水印图片，同样转化为argb数组；
 *      2.将原图的argb中的red位置元素的最后一位舍去（red取值为0～255）即偶数不变，奇数-1；
 *      3.判断水印图片的同一像素点的元素的alpha的值是否为0，不为0说明当前像素点有文字像素存在，
 *        将原图的argb中的red位置元素的最后一位置为1，即原值+1；
 *      4.将原图的改变后的argb数组重新写入canvas中并生成base64图片。
 *      5.提取水印：遍历修改后的图的argb数组，如果red位置为奇数（最后一位为1），
 *        则将对应位置的水印像素点rgb置为255，否则置为0，alpha位置都是255，
 *        然后将生成的水印argb数组通过canvas显示在img中。
 *      ————此算法计算复杂度相对较低；对图像视觉效果影响很小；鲁棒性较低，难以抵抗常见的水印攻击手段。
 */

/**
 * 变换域DCT-离散余弦变换
 * 原理：
 *      1.离散余弦变换(DCT)是一组不同频率和幅值的余弦函数和来近似一副图像，实际上是傅里叶变换的实数部分；
 *      2.离散余弦变量对于一副图像，其大部分可视化信息都集中在少数的变换系数上；
 *      3.离散余弦变量是数据压缩常用的一个变换编码方法，它能将高相关数据能量集中，使得它非常适用于图像压缩。
 * 算法：
 *      1.将图像分解为8*8的图像块，之后进行量化；
 *      2.在量化过程中，从左至右，从上至下对每个图像块做DCT变换，舍弃高频分量，剩下的低频分量被保存下来用于后期图像重建；
 *      3.对余下的图像块进行量化压缩，由压缩后的数据所组成的图像大大缩减了存储空间；
 *      4.解压缩时对每个图像块做DCT反转换（IDCT），然后重建一幅完整的图像；
 *      5.由于舍弃了某些频率的图像，所以最终呈现出来的图像清晰度会有差异。
 *      ————此算法通用性比较强，在分块和频域位置选择合理的情况下，可以抵抗一定程度裁剪、缩放和压缩等常见的攻击手段。
 */

/**
 * 变换域DFT-傅里叶变换
 * 算法：
 */

/**
 * 变换域DWT-小波变换
 * 算法：
 */

/**
 * 文本
 * 算法：
 */

/**
 * 音频LSB
 * 算法：
 */

/**
 * 音频MDCT
 * 算法：
 */

/**
 * 音频MCLT
 * 算法：
 */

/**
 * 回声
 * 算法：
 */

export enum EButtons {
  DIV = 'div',
  CANVAS = 'canvas',
  SVG = 'svg',
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

export const buttonList = [
  {
    value: EButtons.DIV,
    key: EButtons.DIV,
  },
  {
    value: EButtons.CANVAS,
    key: EButtons.CANVAS,
  },
  {
    value: EButtons.SVG,
    key: EButtons.SVG,
  },
  {
    value: EButtons.BLANKRAREA,
    key: EButtons.BLANKRAREA,
  },
  {
    value: EButtons.DCT,
    key: EButtons.DCT,
  },
  {
    value: EButtons.DFT,
    key: EButtons.DFT,
  },
  {
    value: EButtons.DWT,
    key: EButtons.DWT,
  },
  {
    value: EButtons.TEXT,
    key: EButtons.TEXT,
  },
  {
    value: EButtons.LSB,
    key: EButtons.LSB,
  },
  {
    value: EButtons.MDCT,
    key: EButtons.MDCT,
  },
  {
    value: EButtons.MCLT,
    key: EButtons.MCLT,
  },
  {
    value: EButtons.ECHO,
    key: EButtons.ECHO,
  },
];
