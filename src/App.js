import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="portfolio">
                    <Header/>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Slogan/>
                    <Contacts/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;
