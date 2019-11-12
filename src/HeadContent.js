import React from 'react';
import styles from './HeadContent.module.css';

function HeadContent(props) {
    return (

        <div className={styles.titleWrap}>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    );
}

export default HeadContent;
