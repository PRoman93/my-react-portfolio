import React from 'react';
import styles from './HeadContent.module.css';

function HeadContent(props) {
    return (

        <div >
                    <h2 className={styles.topSkills}>{props.title}</h2>
                    <div className={styles.line}></div>
        </div>
    );
}

export default HeadContent;
