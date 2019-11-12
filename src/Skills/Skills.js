import React from 'react';
import styles from './Skills.module.css';
import HeadContent from "../HeadContent";

function Skills() {


    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <HeadContent title="Мои скиллы"/>
                    {/*<h2 className={styles.topSkills}>Мои скиллы</h2>*/}
                    {/*<div className={styles.line}></div>*/}
                    <div>
                        <span
                            className={styles.active}>All</span><span>Slideshow</span><span>Video</span><span>Image</span>
                    </div>
                </div>
                <div className={styles.otherSkills}>
                    <div className={styles.column3}>
                        <div className={styles.rightSkillsTop}>
                            <div className={styles.rightSkillsBox_1}></div>
                            <div className={styles.rightSkillsWord}>JS</div>
                        </div>
                        <div className={styles.rightSkillsBottom}>
                            <span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.rightSkillsTop}>
                            <div className={styles.rightSkillsBox_2}></div>
                            <div className={styles.rightSkillsWord}>HTML,CSS</div>
                        </div>
                        <div className={styles.rightSkillsBottom}>
                            <span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>
                        </div>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.rightSkillsTop}>
                            <div className={styles.rightSkillsBox_3}></div>
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
