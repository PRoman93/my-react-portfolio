import React from 'react';
import styles from "./Slogan.module.css";
import HeadContent from "../HeadContent";
import Button from "../Button";


function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.container}>
                    <HeadContent title="Рассмартиваю варианты удаленной работы"/>
                <Button value="Нанять меня"/>
            </div>
        </div>
    );
}

export default Slogan;
