import React from 'react';
import styles from "./Footer.module.css";
import mail from "../assets/mail.svg"
import vk from "../assets/vk-brands.svg"
import instagram from "../assets/instagram-brands.svg"
import telegram from "../assets/telegram-plane-brands.svg"
import github from "../assets/github_footer.svg"


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.header}>Роман Прокопец</div>
                <div className={styles.footerContainer}>

                    <div><img className={styles.socialIcon} src={github} alt="GitHub"/></div>
                    <div><img className={styles.socialIcon} src={vk} alt="VK"/></div>
                    <div><img className={styles.socialIcon} src={mail} alt="Mail"/></div>
                    <div><img className={styles.socialIcon} src={telegram} alt="Telegram"/></div>
                    <div><img className={styles.socialIcon} src={instagram} alt="Instagram"/></div>
                </div>
                <div className={styles.copyRights}>© 2020 Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
