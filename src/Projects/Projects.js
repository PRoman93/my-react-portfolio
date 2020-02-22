import React from 'react';
import styles from './Projects.module.css';
import HeadContent from "../HeadContent";
import Button from "../Button";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function Projects() {
    return (
        <Fade right>
            <div className={styles.projects}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper} id='projects'>
                        <HeadContent title="Проекты"/>
                    </div>
                    <div className={styles.projectsWrapper}>
                        <Bounce bottom>

                            <div className={styles.network}>
                                <a href="https://proman93.github.io/my-react-way/">
                                    <div className={styles.hiddenContentWrapper}>
                                        <div>
                                            <Button value={'Смотреть'}/>
                                            <h3>Social network</h3>
                                            <div>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Amet at autem delectus dolor
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </Bounce>
                        <Bounce bottom>
                            <div className={styles.list}>
                                <div className={styles.hiddenContentWrapper}>
                                    <div>
                                        <Button value={'Смотреть'}/>
                                        <h3>ToDo List</h3>
                                        <div>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Amet at autem delectus dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce bottom>
                            <div className={styles.counter}>
                                <div className={styles.hiddenContentWrapper}>
                                    <div>
                                        <Button value={'Смотреть'}/>
                                        <h3>Counter</h3>
                                        <div>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Amet at autem delectus dolor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Bounce>
                        <Bounce bottom>
                            <div className={styles.dog}>
                                <div className={styles.hiddenContentWrapper}>
                                    <div>
                                        <Button value={'Смотреть'}/>
                                        <h3>Dog game</h3>
                                        <div>Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Amet at autem delectus dolor
                                        </div>
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
