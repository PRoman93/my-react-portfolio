import React from 'react';
import styles from "./Footer.module.css";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div>Иван Иванов</div>
                <div className={styles.footerContainer}>
                    <div className={styles.socialIcons}></div>
                    <div className={styles.socialIcons}></div>
                    <div className={styles.socialIcons}></div>
                    <div className={styles.socialIcons}></div>
                </div>
                <div>© 2019 Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
