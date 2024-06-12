import { Button } from '@aloudata/aloudata-design';
import { ArrowsRightSmLine } from '@aloudata/icons-react';
import { history } from 'umi';
import styles from './index.less';

export default function Table() {
  const handleReturn = () => {
    history.push('/buttons/robustness');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <div className={styles.iconLeft}>查看鲁棒性对比表格</div>
          <div className={styles.iconRight}>
            <Button onClick={handleReturn}>
              <span>返回</span>
              <ArrowsRightSmLine />
            </Button>
          </div>
        </div>
        <div className={styles.wrapperContent}>111</div>
      </div>
    </div>
  );
}
