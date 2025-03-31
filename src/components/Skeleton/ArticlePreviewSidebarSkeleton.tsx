import { Component } from 'solid-js';

import styles from './Skeleton.module.scss';

const ArticlePreviewSidebarSkeleton: Component<{
  id?: string,
}> = (props) => {
  return (
    <div class={styles.articlePreviewSidebarSkeleton}>
      <div class={styles.header}>
        <div class={styles.avatar}></div>
        <div class={styles.userInfo}></div>
      </div>
      <div class={styles.body}>
        <div class={styles.text}></div>
        <div class={styles.image}></div>
      </div>
    </div>
  );
}

export default ArticlePreviewSidebarSkeleton;
