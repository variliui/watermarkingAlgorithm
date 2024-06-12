import { Button } from '@aloudata/aloudata-design';
import { ArrowsRightSmLine } from '@aloudata/icons-react';
import { history } from 'umi';
import Superposition from '../Index/components/Superposition';
import styles from './index.less';

export default function WatermarkSuperposition() {
  const handleReturn = () => {
    history.push('/buttons');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <div className={styles.iconLeft}>水印叠加</div>
          <div className={styles.iconRight}>
            <Button onClick={handleReturn}>
              <span>返回</span>
              <ArrowsRightSmLine />
            </Button>
          </div>
        </div>
        <div>
          <Superposition />
        </div>
      </div>
    </div>
  );
}
