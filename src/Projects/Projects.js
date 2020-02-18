import React from 'react';
import styles from './Projects.module.css';
import HeadContent from "../HeadContent";
import Button from "../Button";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
function Projects() {
    return (
        <Fade right>
            <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.works} id='projects'>
                        <HeadContent title="Проекты"/>
                    </div>
                    <div className={styles.projectsMain}>
                        <Bounce bottom>
                                <div className={styles.mainSecond}>
                                    {/*<Reveal effect='fadeInUp'>*/}
                                    <div className={styles.secondTop}>
                                        <div className={styles.projectContent}>
                                            <Button value={'Смотреть'}/>
                                            <h3>Social network</h3>
                                            <div>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Amet at autem delectus dolor </div>
                                            <a href="https://proman93.github.io/my-react-way/"></a>
                                        </div>
                                    </div>
                                    {/*</Reveal>*/}
                                </div>


                        </Bounce>
                        <Bounce bottom>
                        <div className={styles.mainSecond}>
                            <div className={styles.secondTop}>
                                <div className={styles.projectContent}>
                                    <Button value={'Смотреть'}/>
                                    <h3>ToDo List</h3>
                                    <div>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Amet at autem delectus dolor </div>
                                </div>
                            </div>
                        </div>
                        </Bounce>
                        <Bounce bottom>
                        <div className={styles.mainSecond}>
                            <div className={styles.secondTop}>
                                <div className={styles.projectContent}>
                                    <Button value={'Смотреть'}/>
                                    <h3>Counter</h3>
                                    <div>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Amet at autem delectus dolor </div>
                                </div>
                            </div>
                        </div>
                        </Bounce>
                    </div>
                </div>

            </div>
        </Fade>

    );
}

export default Projects;
