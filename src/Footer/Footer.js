import React from 'react';
import styles from "./Footer.module.css";
import vk from "../assets/social/vk.svg"
import instagram from "../assets/social/instagram.svg"
import telegram from "../assets/social/telegram.svg"
import github from "../assets/social/github_footer.svg"
import Flip from 'react-reveal/Flip';



function Footer() {
    return (
        <Flip bottom>
            <div className={styles.footerWrapper}>
                <div className={styles.container}>
                    <div className={styles.header}>Роман Прокопец</div>
                    <div className={styles.iconWrapper}>
                        <div><a href="https://github.com/PRoman93"><img className={styles.socialIcon} src={github} alt="GitHub"/></a></div>
                        <div><a href="https://vk.com/id283922790"><img className={styles.socialIcon} src={vk} alt="VK"/></a></div>
                        <div><a href="https://t.me/ProRoman93"><img className={styles.socialIcon} src={telegram} alt="Telegram"/></a></div>
                        <div><a href="https://www.instagram.com/roma.prokopets/"><img className={styles.socialIcon} src={instagram} alt="Instagram"/></a></div>
                    </div>
                    <div className={styles.copyRights}>© 2020 Все права защищены</div>
                </div>

            </div>
        </Flip>

    );
}

export default Footer;
