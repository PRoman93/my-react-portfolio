import React from 'react';
import styles from "./Footer.module.css";
import vk from "./vk.jpg"
import facebook from "./facebook.jpg"
import instagram from "./instagram.jpg"
import mail from "./mail.ru.jpg"


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.header}>Роман Прокопец</div>
                <div className={styles.footerContainer}>
                    <div><img className={styles.socialIcon} src={vk} alt="" width="50px" height="50px"/></div>
                    <div><img className={styles.socialIcon} src={facebook} width="50px" height="50px" alt=""/></div>
                    <div><img className={styles.socialIcon} src={mail} width="50px" height="50px"  alt=""/></div>
                    <div><img className={styles.socialIcon} src={instagram} width="50px" height="50px" alt=""/></div>
                </div>
                <div className={styles.copyRights}>© 2019 Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
