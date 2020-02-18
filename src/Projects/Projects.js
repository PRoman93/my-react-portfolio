import React from 'react';
import styles from './Projects.module.css';
import HeadContent from "../HeadContent";
import Button from "../Button";
import Fade from 'react-reveal/Fade';

function Projects() {
    return (
        <Fade right>
            <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.works} id='projects'>
                        <HeadContent title="Проекты"/>
                    </div>
                    <div className={styles.projectsMain}>
                        <div className={styles.mainSecond}>
                            <div className={styles.secondTop}>
                                <Button value={'Смотреть'}/>
                            </div>
                            <div className={styles.secondBottom}>
                                Название проекта
                                <div >
                                    Краткое описание
                                </div>
                            </div>
                        </div>
                        <div className={styles.mainSecond}>
                            <div className={styles.secondTop}>
                                <Button value={'Смотреть'}/>
                            </div>
                            <div className={styles.secondBottom}>
                                <div>Название проекта</div>
                                <div className={styles.bottomDescription}>
                                    Краткое описание
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>

    );
}

export default Projects;
