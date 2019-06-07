// @flow
import React from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string
};

const Content = ({ body, title }: Props) => (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>Watch One Piece {title} Online.</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
      <div className={styles['content__body']}>
      Watch One Piece {title} online in high quality. Watch One Piece {title} Subbed Online. Watch One Piece {title} in best quality. 
      Watch {title} of one piece in best quality. Download One Piece {title} in high quality.
    </div>
  </div>
);

export default Content;
