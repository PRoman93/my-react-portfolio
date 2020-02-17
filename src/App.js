import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from "react-particles-js";

class App extends Component {

    render() {

        const particleOpt = {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                }
            }
        }
        return (
            <div className="App">
                <Particles className='particles'
                           params={particleOpt}/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
