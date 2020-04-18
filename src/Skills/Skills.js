import React from 'react';
import styles from './Skills.module.css';
import HeadContent from "../HeadContent";
import react from '../assets/technologies/react.svg'
import redux from '../assets/technologies/redux.png'
import css from '../assets/technologies/css.svg'
import html from '../assets/technologies/html.svg'
import js from '../assets/technologies/js.svg'
import github from '../assets/technologies/github.svg'
import typescript from '../assets/technologies/typescript.svg'
import Fade from 'react-reveal/Fade';

function Skills() {


    return (
        <div className={styles.mainSkillsWrapper}>
            <Fade left>
                <div className={styles.container}>
                    <div className={styles.headerWrapper} id='skills'>
                        <HeadContent title="Скиллы"/>
                    </div>
                    <div className={styles.skillsWrapper}>
                        <Fade left>
                            <div className={styles.skillList}>
                                <div className={styles.skillContainer}>
                                    <div><img className={styles.skillImg} src={html} alt=""/></div>
                                    <h3 className={styles.skillTitle}>HTML</h3>
                                </div>
                            </div>
                            <div className={styles.skillList}>
                                <div className={styles.skillContainer}>
                                    <div><img className={styles.skillImg} src={css} alt=""/></div>
                                    <h3 className={styles.skillTitle}>CSS</h3>
                                </div>
                            </div>
                            <div className={styles.skillList}>
                                <div className={styles.skillContainer}>
                                    <div><img src={js} className={styles.skillImg} alt=""/></div>
                                    <h3 className={styles.skillTitle}>JS</h3>
                                </div>
                            </div>
                        </Fade>
                        <Fade >
                        <div className={styles.skillList}>
                            <div className={styles.skillContainer}>
                                <div>
                                    <img src={react} className={styles.skillImg} alt=""/>
                                </div>
                                <h3 className={styles.skillTitle}>React</h3>
                            </div>
                        </div>
                        <div className={styles.skillList}>
                            <div className={styles.skillContainer}>
                                <div>
                                    <img src={redux} className={styles.skillImg} alt=""/>
                                </div>
                                <h3 className={styles.skillTitle}>Redux</h3>
                            </div>
                        </div>
                        <div className={styles.skillList}>
                            <div className={styles.skillContainer}>
                                <div>
                                    <img src={github} className={styles.skillImg} alt=""/>
                                </div>
                                <h3 className={styles.skillTitle}>GitHub</h3>
                            </div>
                        </div>
                            <div className={styles.skillList}>
                            <div className={styles.skillContainer}>
                                <div>
                                    <img src={typescript} className={styles.skillImg} alt=""/>
                                </div>
                                <h3 className={styles.skillTitle}>TypeScript</h3>
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
