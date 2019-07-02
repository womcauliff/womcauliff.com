// @flow
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  subtitle?: string,
};

const Content = ({ body, title, subtitle }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {subtitle && <h2 className={styles['content__subtitle']}>{subtitle}</h2>}
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
