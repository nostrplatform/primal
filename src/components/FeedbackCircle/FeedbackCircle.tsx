import { Component } from 'solid-js';
import checkIcon from  '../../assets/icons/check_circle.svg';

import styles from './FeedbackCircle.module.scss';


const FeedbackCircle: Component<{ success?: boolean }> = (props) => {


  return (
    <div class={styles.container}>
      <div class={`${styles.circle} ${props.success ? styles.success : styles.fail}`}>
        {props.success ? <img src={checkIcon} /> : <div>X</div>}
      </div>
    </div>
  );
}

export default FeedbackCircle;
