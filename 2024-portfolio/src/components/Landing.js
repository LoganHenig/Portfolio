import React from "react";
import { Fade } from "react-awesome-reveal";
import { CustomCard } from "./Card";
import {NavBar} from "./NavBar"

import reactIcon from '../assets/reactIcon.png';
import nextUIIcon from '../assets/nextUI.png';
import reveal from '../assets/reveal.png';
import vue from '../assets/vue.png'
import js from '../assets/javascript.png'
import github from '../assets/github.png'
import spring from '../assets/springboot.png'
import mongo from '../assets/mongo.png'
import azure from '../assets/azure.png'
import { Footer } from "./footer";


export const Landing = () => {
    
    const cardData = [
        <CustomCard  iconSrc={reactIcon} bodyText='ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components' link='https://react.dev/' headerText='React' headerUrl='react.dev' linkText='View Documentation'/>,
        <CustomCard  iconSrc={nextUIIcon} bodyText='NextUI is a component-based CSS framework, which means it provides a set of pre-designed components you can use at any time.' link='https://nextui.org/' headerText='NextUI' headerUrl='nextui.org' linkText='View Documentation'/>,
        <CustomCard  iconSrc={reveal} bodyText='React Awesome Reveal is a react library that uses Web Animations API for performant animations.' link='https://react-awesome-reveal.morello.dev/' headerText='React Awesom Reveal' headerUrl='react-awesome-reveal.morello.dev' linkText='View Documentation'/>,
        <CustomCard  iconSrc={vue} bodyText='Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page applications.' link='https://vuejs.org/' headerText='Vue' headerUrl='vuejs.org/' linkText='View Documentation'/>,
        <CustomCard  iconSrc={js} bodyText='JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.' link='https://developer.oracle.com/languages/javascript.html' headerText='JavaScript' headerUrl='developer.oracle.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={github} bodyText='GitHub is a developer platform that allows developers to create, store, manage and share their code.' link='https://github.com/' headerText='GitHub' headerUrl='github.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={spring} bodyText='Spring Boot is an open-source Java-based framework used for creating standalone, production-grade Spring-based applications with minimal effort.' link='https://spring.io/projects/spring-boot' headerText='Spring Boot' headerUrl='spring.io' linkText='View Documentation'/>,
        <CustomCard  iconSrc={mongo} bodyText='MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product. ' link='https://www.mongodb.com/' headerText='MongoDB' headerUrl='mongodb.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={azure} bodyText='Microsoft Azure, is a cloud computing platform run by Microsoft. It offers access, management, and the development of applications and services through global data centers.' link='https://azure.microsoft.com/' headerText='Azure Dev Ops' headerUrl='/azure.microsoft.com' linkText='View Documentation'/>
    ]

  return (
    <main className="dark text-foreground bg-background fill-screen">
    
    <NavBar></NavBar>
    <div className="center-content">
        <div className='name-container'>
         <Fade delay={1000}>
            <h1 className='my-name'>Logan Henig</h1>
        </Fade>   

        </div>
        <h3 className='technology-used'> Below is are cards showing the Technology I used to make this app.</h3>
    <div className="tech-continer" >
        <Fade cascade={true} damping={0.3}>
            
            <CustomCard  iconSrc={reactIcon} bodyText='ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components' link='https://react.dev/' headerText='React' headerUrl='react.dev' linkText='View Documentation'/>
            <CustomCard  iconSrc={nextUIIcon} bodyText='NextUI is a component-based CSS framework, which means it provides a set of pre-designed components you can use at any time.' link='https://nextui.org/' headerText='NextUI' headerUrl='nextui.org' linkText='View Documentation'/>
            <CustomCard  iconSrc={reveal} bodyText='React Awesome Reveal is a react library that uses Web Animations API for performant animations.' link='https://react-awesome-reveal.morello.dev/' headerText='React Awesom Reveal' headerUrl='react-awesome-reveal.morello.dev' linkText='View Documentation'/>
            
        </Fade>
    </div>    
    <h3 className='technology-used'> Technology I have used to make projects </h3>
    <div className="tech-continer" >
        <Fade cascade={true} damping={0.1}>
            
        {cardData}
            
        </Fade>
    </div> 
    </div>
    <Footer/>
    </main>
    )
  
}    