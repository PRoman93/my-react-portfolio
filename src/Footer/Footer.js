import React from 'react';
import styles from "./Footer.module.css";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.header}>Иван Иванов</div>
                <div className={styles.footerContainer}>
                    <div className={styles.socialIcon1}><img src="vk.jpg" alt="" width="50px" height="50px"/></div>
                    <div className={styles.socialIcon2}><img src="facebook.jpg" width="50px" height="50px" alt=""/></div>
                    <div className={styles.socialIcon3}><img src="mail.ru.jpg" width="50px" height="50px"  alt=""/></div>
                    <div className={styles.socialIcon4}><img src="instagram.png" width="50px" height="50px" alt=""/></div>
                </div>
                <div className={styles.copyRights}>© 2019 Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
