import React from 'react';
import styles from "./Slogan.module.css";
import HeadContent from "../HeadContent";
import Button from "../Button";
import Fade from 'react-reveal/Fade';



function Slogan() {
    return (
        <Fade top>
            <div className={styles.slogan}>
                <div className={styles.container}>
                    <HeadContent title="Рассмартиваю варианты удаленной работы"/>
                    <Button value="Нанять меня"/>
                </div>
            </div>
        </Fade>

    );
}

export default Slogan;
