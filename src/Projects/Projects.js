import React from 'react';
import styles from './Projects.module.css';
import HeadContent from "../HeadContent";
import Button from "../Button";

function Projects() {
    return (
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
    );
}

export default Projects;
