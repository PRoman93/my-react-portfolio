import React, {Component} from 'react';
import styles from './NavMenu.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

class NavMenu extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className={styles.navMenu}>
                <a href="#main" className={styles.link} onClick={this.scrollToTop}>
                    <Link
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >Главная
                    </Link>
                </a>
                <a href="#skills" className={styles.link} onClick={this.scrollToTop}>
                    <Link
                        activeClass="active"
                        spy={true}
                        to="skills"
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >Скиллы
                    </Link>
                </a>
                <a href="#projects" className={styles.link} onClick={this.scrollToTop}>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >Проекты</Link></a>
                <a href="#contacts" className={styles.link} onClick={this.scrollToTop}>
                    <Link
                        activeClass="active"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={700}
                    >Контакты</Link></a>
            </div>
        );
    }
}

export default NavMenu;
