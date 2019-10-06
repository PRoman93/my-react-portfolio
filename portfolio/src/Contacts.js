import React from 'react';
import styles from "./Contacts.module.css";


function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div>Контакты</div>
                <div className={styles.mainContacts}>
                    <input className={styles.contactsInput} type="text"/>
                    <input className={styles.contactsInput} type="text"/>
                    <textarea name="" id="" cols="99" rows="10"></textarea>
                </div>
                <input type="button" value={"Отправить"}/>
            </div>

        </div>
    );
}

export default Contacts;
