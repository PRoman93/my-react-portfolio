import React from 'react';
import styles from './Projects.module.css';
import HeadContent from "../HeadContent";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.works}><HeadContent title="Мои работы"/></div>
        <div className={styles.projectsMain}>
          <div className={styles.mainSecond}>
            <div className={styles.secondTop}>
              <button>Смотреть</button>
            </div>
            <div className={styles.secondBottom}>
              <div>Название проекта</div>
              <div className={styles.bottomDescription}>
                Краткое описание</div>
            </div>
          </div>
          <div className={styles.mainSecond}>
            <div className={styles.secondTop}>
              <button>Смотреть</button>
            </div>
            <div className={styles.secondBottom}>
              <div>Название проекта</div>
              <div className={styles.bottomDescription}>
                Краткое описание</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
