import React from 'react';
import styles from './Main.module.css';
import photo from './banner.jpg'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Привет!</span>
                    <span>Меня зовут <span>Роман Прокопец</span></span>
                    <h1>Я front-end developer</h1>
                </div>
                <div className={styles.photo}>
                    <div></div>
                </div>
            </div>
        </div>

    );
}

export default Main;
