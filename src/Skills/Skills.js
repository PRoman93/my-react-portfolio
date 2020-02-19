import React from 'react';
import styles from './Skills.module.css';
import HeadContent from "../HeadContent";
import react from '../assets/technologies/react-brands.svg'
import redux from '../assets/technologies/redux-logo-9CA6836C12-seeklogo.com.png'
import css from '../assets/technologies/css3-brands.svg'
import html from '../assets/technologies/html5-brands.svg'
import js from '../assets/technologies/js-brands.svg'
import github from '../assets/technologies/github.svg'
import Fade from 'react-reveal/Fade';

function Skills() {


    return (
        <div className={styles.skills}>
            <Fade left>
                <div className={styles.container}>
                    <div className={styles.headerWrapper} id='skills'>
                        <HeadContent title="Скиллы"/>
                        {/*<h2 className={styles.topSkills}>Мои скиллы</h2>*/}
                        {/*<div className={styles.line}></div>*/}
                        {/*<div>*/}
                        {/*    <span*/}
                        {/*        className={styles.active}>All</span><span>Slideshow</span><span>Video</span><span>Image</span>*/}
                        {/*</div>*/}
                    </div>
                    <div className={styles.otherSkills}>
                        <Fade left>
                            <div className={styles.column3}>
                                <div className={styles.rightSkillsTop}>
                                    <div><img className={styles.skillsImg} src={html} alt=""/></div>
                                    <h3 className={styles.rightSkillsWord}>HTML</h3>
                                </div>

                                <div className={styles.rightSkillsBottom}>
                                </div>
                            </div>
                            <div className={styles.column3}>
                                <div className={styles.rightSkillsTop}>
                                    <div><img className={styles.skillsImg} src={css} alt=""/></div>
                                    <h3 className={styles.rightSkillsWord}>CSS</h3>
                                </div>
                                <div className={styles.rightSkillsBottom}>
                                    {/*<span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>*/}
                                </div>
                            </div>
                            <div className={styles.column3}>
                                <div className={styles.rightSkillsTop}>
                                    <div><img src={js} className={styles.skillsImg} alt=""/></div>
                                    <h3 className={styles.rightSkillsWord}>JS</h3>
                                </div>

                                <div className={styles.rightSkillsBottom}>
                                    {/*<span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>*/}
                                </div>
                            </div>
                        </Fade>
                        <Fade >
                        <div className={styles.column3}>
                            <div className={styles.rightSkillsTop}>
                                <div>
                                    <img src={react} className={styles.skillsImg} alt=""/></div>
                                <h3 className={styles.rightSkillsWord}>React</h3>
                            </div>
                            <div className={styles.rightSkillsBottom}>
                                {/*<span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>*/}
                            </div>
                        </div>
                        <div className={styles.column3}>
                            <div className={styles.rightSkillsTop}>
                                <div>
                                    <img src={redux} className={styles.skillsImg} alt=""/></div>
                                <h3 className={styles.rightSkillsWord}>Redux</h3>
                            </div>
                            <div className={styles.rightSkillsBottom}>
                                {/*<span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>*/}
                            </div>
                        </div>
                        <div className={styles.column3}>
                            <div className={styles.rightSkillsTop}>
                                <div>
                                    <img src={github} className={styles.skillsImg} alt=""/></div>
                                <h3 className={styles.rightSkillsWord}>GitHub</h3>
                            </div>
                            <div className={styles.rightSkillsBottom}>
                                {/*<span className={styles.rightSkillsBottomPhrase}>Подробное описание навыка</span>*/}
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Skills;
