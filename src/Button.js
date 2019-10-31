import React from 'react';
import styles from "./Button.module.css";


function Button(props) {
    return (
            <a className={styles.button}>{props.value}</a>
    );
}

export default Button;
