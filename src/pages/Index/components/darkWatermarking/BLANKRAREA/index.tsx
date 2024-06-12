import { Button } from '@aloudata/aloudata-design';
import { useCallback, useEffect, useState } from 'react';
import styles from './index.less';

interface IProps {
  currentImage: string;
  flag: boolean;
  waterMark: string;
}

interface IWaterMark {
  width: number;
  height: number;
}

export default function BlankAreaWaterMarking({
  currentImage,
  flag,
  waterMark,
}: IProps) {
  const [colorArray, setColorArray] = useState<number[][]>([]);
  const [waterMarkArray, setWaterMarkArray] = useState<number[][]>([]);
  const [waterMarkMsg, setWaterMarkMsg] = useState<IWaterMark>();
  const [mixedImg, setMixedImg] = useState<string>('');
  const [waterMarkImg, setWaterMarkImg] = useState<string>('');

  const createWaterMark = useCallback(
    (createWaterMarkMsg: IWaterMark) => {
      const canvas = document.createElement('canvas');
      canvas.width = createWaterMarkMsg.width;
      canvas.height = createWaterMarkMsg.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // eslint-disable-next-line no-magic-numbers
        ctx.clearRect(0, 0, 200, 100);
        ctx.fillStyle = '#000';
        // eslint-disable-next-line no-magic-numbers
        ctx.font = `${canvas.width / 10}px serif`;
        // eslint-disable-next-line no-magic-numbers
        ctx.fillText(waterMark, 0, canvas.width / 2.5, canvas.width);
      }
      return canvas.toDataURL();
    },
    [waterMark],
  );

  const getHex = useCallback((src: string, type: boolean) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      const color = commonFun(image);
      if (type) {
        setColorArray(color);
        setWaterMarkMsg({ width: image.width, height: image.height });
      } else {
        setWaterMarkArray(color);
      }
    };
  }, []);

  useEffect(() => {
    if (currentImage) {
      getHex(currentImage, true);
    }
  }, [currentImage, getHex]);

  useEffect(() => {
    if (waterMarkMsg) {
      const waterMarkImage = createWaterMark(waterMarkMsg);
      getHex(waterMarkImage, false);
    }
  }, [createWaterMark, getHex, waterMarkMsg]);

  const rgbToBase64 = useCallback(
    (rgba: number[][]) => {
      const canvas = document.createElement('canvas');
      if (waterMarkMsg) {
        canvas.width = waterMarkMsg.width;
        canvas.height = waterMarkMsg.height;
        const context = canvas.getContext('2d');
        if (context) {
          const tempImg = context.getImageData(
            // eslint-disable-next-line no-magic-numbers
            0,
            // eslint-disable-next-line no-magic-numbers
            0,
            canvas.width,
            canvas.height,
          );
          for (let i = 0; i < rgba.length; i++) {
            // eslint-disable-next-line no-magic-numbers
            tempImg.data[i * 4] = rgba[i][0];
            // eslint-disable-next-line no-magic-numbers
            tempImg.data[i * 4 + 1] = rgba[i][1];
            // eslint-disable-next-line no-magic-numbers
            tempImg.data[i * 4 + 2] = rgba[i][2];
            // eslint-disable-next-line no-magic-numbers
            tempImg.data[i * 4 + 3] = rgba[i][3];
          }
          // eslint-disable-next-line no-magic-numbers
          context.putImageData(tempImg, 0, 0);
          context.save();
        }
      }
      setMixedImg(canvas.toDataURL());
    },
    [waterMarkMsg],
  );

  const mixedWaterMark = useCallback(
    (colorArr: number[][], waterMarkArr: number[][]) => {
      for (const i in colorArr) {
        // eslint-disable-next-line no-magic-numbers
        if (colorArr[i][0] % 2 === 1) {
          // eslint-disable-next-line no-magic-numbers
          colorArr[i][0]--;
        }
        // eslint-disable-next-line no-magic-numbers
        if (waterMarkArr[i][3] !== 0) {
          // eslint-disable-next-line no-magic-numbers
          colorArr[i][0]++;
        }
      }
      rgbToBase64(colorArr);
    },
    [rgbToBase64],
  );

  const getHexArray = useCallback(
    (src: string) => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        const rgba = commonFun(image);
        const canvas = document.createElement('canvas');
        if (waterMarkMsg) {
          canvas.width = waterMarkMsg.width;
          canvas.height = waterMarkMsg.height;
          const context = canvas.getContext('2d');
          if (context) {
            const tempImg = context.getImageData(
              // eslint-disable-next-line no-magic-numbers
              0,
              // eslint-disable-next-line no-magic-numbers
              0,
              canvas.width,
              canvas.height,
            );
            for (let i = 0; i < rgba.length; i++) {
              // eslint-disable-next-line no-magic-numbers
              const currentColor = rgba[i][0] % 2 === 0 ? 255 : 0;
              // eslint-disable-next-line no-magic-numbers
              tempImg.data[i * 4] = currentColor;
              // eslint-disable-next-line no-magic-numbers
              tempImg.data[i * 4 + 1] = currentColor;
              // eslint-disable-next-line no-magic-numbers
              tempImg.data[i * 4 + 2] = currentColor;
              // eslint-disable-next-line no-magic-numbers
              tempImg.data[i * 4 + 3] = 255;
            }
            // eslint-disable-next-line no-magic-numbers
            context.putImageData(tempImg, 0, 0);
            context.save();
          }
        }
        setWaterMarkImg(canvas.toDataURL());
      };
    },
    [waterMarkMsg],
  );

  const extractWaterMark = useCallback(
    (img: string) => {
      getHexArray(img);
    },
    [getHexArray],
  );

  useEffect(() => {
    extractWaterMark(mixedImg);
  }, [extractWaterMark, mixedImg]);

  useEffect(() => {
    // eslint-disable-next-line no-magic-numbers
    if (colorArray.length > 0 && waterMarkArray.length > 0) {
      mixedWaterMark(colorArray, waterMarkArray);
    }
  }, [colorArray, mixedWaterMark, waterMarkArray]);

  const commonFun = (image: HTMLImageElement) => {
    const color: number[][] = [];
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    if (context) {
      // eslint-disable-next-line no-magic-numbers
      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(
        // eslint-disable-next-line no-magic-numbers
        0,
        // eslint-disable-next-line no-magic-numbers
        0,
        canvas.width,
        canvas.height,
      );
      // eslint-disable-next-line no-magic-numbers
      for (let i = 0; i < imageData.data.length; i = i + 4) {
        const onePixel: number[] = [];
        // eslint-disable-next-line no-magic-numbers
        onePixel.push(imageData.data[i + 0]);
        onePixel.push(imageData.data[i + 1]);
        // eslint-disable-next-line no-magic-numbers
        onePixel.push(imageData.data[i + 2]);
        // eslint-disable-next-line no-magic-numbers
        onePixel.push(imageData.data[i + 3]);
        color.push(onePixel);
      }
    }
    return color;
  };

  const handleAddWaterMark = () => {};

  const handleExtractWaterMark = () => {};

  return (
    <div className={styles.container}>
      {flag ? (
        <div className={styles.fullContainer}>
          <div className={styles.container}>
            <img src={mixedImg} className={styles.image} />
          </div>
          <Button
            type="primary"
            className={styles.button}
            onClick={handleAddWaterMark}
            disabled={true}
          >
            水印添加
          </Button>
        </div>
      ) : (
        <div className={styles.fullContainer}>
          <div className={styles.container}>
            <img src={waterMarkImg} className={styles.image} />
          </div>
          <Button
            type="primary"
            className={styles.button}
            onClick={handleExtractWaterMark}
            disabled={true}
          >
            水印提取
          </Button>
        </div>
      )}
    </div>
  );
}
