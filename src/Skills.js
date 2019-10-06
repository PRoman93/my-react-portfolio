import React from 'react';
import styles from './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
               <div className={styles.topSkills}>Мои скиллы</div>
                <div className={styles.otherSkills}>
                    <div className={styles.column1}>
                    </div>
                    <div className={styles.column2}>
                        <div className={styles.middleSkillsTop}></div>
                        <div className={styles.middleSkillsBottom}></div>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.rightSkillsTop}>
                            <div className={styles.rightSkillsBox}></div>
                            <div className={styles.rightSkillsWord}>React</div>
                        </div>
                        <div className={styles.rightSkillsBottom}>
                            <span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
