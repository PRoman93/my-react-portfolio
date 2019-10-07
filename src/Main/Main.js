import React from 'react';
import styles from './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi there</span>
                    <span>Меня зовут Иван Иванов</span>
                    <span>Я молодец</span>
                </div>
                <div className={styles.photo}>
                    <div></div>
                </div>
            </div>
        </div>

    );
}

export default Main;
