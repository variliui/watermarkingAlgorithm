import { Button } from '@aloudata/aloudata-design';
import Uploads from '../Uploads';
import styles from './index.less';
import { buttonList } from './type';

export default function Superposition() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <div className={styles.leftContent}>
            <Uploads />
          </div>
          <div className={styles.midContent}>
            <div className={styles.midUp}>
              <div className={styles.midUpBtn}>
                {buttonList.map((item, index) => {
                  return <Button key={index}>{item.value}</Button>;
                })}
              </div>
            </div>
            <div className={styles.midDown}>
              <div className={styles.spare}>
                <div className={styles.upSpare}>水印叠加区域</div>
                <div className={styles.downSpare}>Button区域</div>
              </div>
              <Button className={styles.midDownBtn} type="primary">
                开始
              </Button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.text}>等待图片生成...</div>
            <div>
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
