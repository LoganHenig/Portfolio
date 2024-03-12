import React from "react";
import { Fade } from "react-awesome-reveal";
import { CustomCard } from "./Card";
import {NavBar} from "./NavBar"

import reactIcon from '../assets/reactIcon.png';
import nextUIIcon from '../assets/nextUI.png';
import reveal from '../assets/reveal.png';


export const Landing = () => {
  return (
    <main className="dark text-foreground bg-background fill-screen">
    
    <NavBar></NavBar>
    <div className="center-content">
        <div className='name-container'>
        <h1 className='my-name'>Logan Henig</h1>

        </div>
        <h3 className='technology-used'> Technology used to make this app</h3>
    <div className="tech-continer" >
        <Fade cascade={true} damping={0.3}>
            
            <CustomCard  iconSrc={reactIcon} bodyText='ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components' link='https://react.dev/' headerText='React' headerUrl='react.dev' linkText='View Documentation'/>
            <CustomCard  iconSrc={nextUIIcon} bodyText='NextUI is a component-based CSS framework, which means it provides a set of pre-designed components you can use at any time.' link='https://nextui.org/' headerText='NextUI' headerUrl='nextui.org' linkText='View Documentation'/>
            <CustomCard  iconSrc={reveal} bodyText='React Awesome Reveal is a react library that uses Web Animations API for performant animations.' link='https://react-awesome-reveal.morello.dev/' headerText='React Awesom Reveal' headerUrl='react-awesome-reveal.morello.dev' linkText='View Documentation'/>
            
        </Fade>
        </div>    
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
            <p>FADE PROP</p>
        
    </div>
    </main>
    )
  
}    