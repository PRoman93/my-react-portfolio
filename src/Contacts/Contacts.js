import React from 'react';
import styles from "./Contacts.module.css";
import HeadContent from "../HeadContent";
import Button from "../Button";
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <Fade clear>
            <div className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.headContent} id='contacts'>
                        <HeadContent title="Контакты" />
                    </div>
                    <form className={styles.mainContacts}>
                        <input className={styles.contactsInput} type="text" placeholder={"Name"}/>
                        <input className={styles.contactsInput} type="text" placeholder={"E-mail"}/>
                        <textarea  id="" placeholder={"Your message"}></textarea>
                        <Button value="Отправить"/>
                    </form>

                </div>

            </div>
        </Fade>

    );
}

export default Contacts;
