import BlankAreaWaterMarking from '../darkWatermarking/BLANKRAREA';
import DCT from '../darkWatermarking/DCT';
import CanvasWaterMarking from '../openWatermark/Canvas';
import DivWaterMarking from '../openWatermark/Div';
import SvgWaterMarking from '../openWatermark/Svg';
import { EButtons } from '../Superposition/type';

interface IProps {
  currentImg: string;
  currentWaterMarking: string;
  flag: boolean;
  waterMark: string;
}

export default function Middleware({
  currentImg,
  currentWaterMarking,
  flag,
  waterMark,
}: IProps) {
  switch (currentWaterMarking) {
    case EButtons.DIV:
      return <DivWaterMarking currentImage={currentImg} flag={flag} />;
    case EButtons.CANVAS:
      return <CanvasWaterMarking currentImage={currentImg} flag={flag} />;
    case EButtons.SVG:
      return <SvgWaterMarking currentImage={currentImg} flag={flag} />;
    case EButtons.BLANKRAREA:
      return (
        <BlankAreaWaterMarking
          currentImage={currentImg}
          flag={flag}
          waterMark={waterMark}
        />
      );
    case EButtons.DCT:
      return (
        <DCT currentImage={currentImg} flag={flag} waterMark={waterMark} />
      );
  }
  return <div></div>;
}
