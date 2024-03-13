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
import java from '../assets/java.png'
import cpp from '../assets/c++.png'
import python from '../assets/python.png'
import sql from '../assets/sql.png'

import { Footer } from "./footer";
import { MyDivider } from "./divider";


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
        <CustomCard  iconSrc={azure} bodyText='Microsoft Azure, is a cloud computing platform run by Microsoft. It offers access, management, and the development of applications and services through global data centers.' link='https://azure.microsoft.com/' headerText='Azure Dev Ops' headerUrl='/azure.microsoft.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={java} bodyText='Java is a high-level, class-based, object-oriented programming language that is designed with few dependencies and a write once, run anywhere architecture.' link='https://www.java.com/en/' headerText='Java' headerUrl='java.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={cpp} bodyText='C++ is a cross-platform language that can be used to create high-performance applications. C++ gives programmers control over system resources and memory.' link='https://www.w3schools.com/cpp/default.asp' headerText='C++' headerUrl='w3schools.com' linkText='View Documentation'/>,
        <CustomCard  iconSrc={python} bodyText='Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.' link='https://www.python.org/' headerText='Python' headerUrl='python.org' linkText='View Documentation'/>,
        <CustomCard  iconSrc={sql} bodyText='Structured Query Language is a domain-specific language used to manage data, especially in a relational database management system.' link='https://www.w3schools.com/sql' headerText='SQL' headerUrl='w3schools.com/sql' linkText='View Documentation'/>,

        // <CustomCard  iconSrc={} bodyText='' link='' headerText='' headerUrl='' linkText='View Documentation'/>,
        

    ]

  return (
    <main className="dark text-foreground bg-background fill-screen">
    
    <NavBar></NavBar>
    {/* <Fade > */}
    <div className="center-content">
        <div className='name-container'>
         <Fade delay={1000}>
            <h1 className='my-name'>Logan Henig</h1>
        </Fade>   

    </div>

    <div className='about-container'> 
    <div>&#60;h1&#62; Hello, &#60;/h1&#62;</div> 
    <div>&#60;div&#62; Welcome to my portfolio! I am a fullstack web developer from Michigan &#60;/div&#62;</div>
    </div>
    <MyDivider/>
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
    {/* </Fade> */}
    </main>
    )
  
}    