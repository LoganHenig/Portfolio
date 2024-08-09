import React, {useEffect, useState} from "react";
// import Fade from "react-reveal/Fade"
import { CustomCard } from "./Card";
import {NavBar} from "./NavBar"
import {Chip} from "@nextui-org/react";
import {CircularProgress} from "@nextui-org/react";

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
import html from '../assets/html.png'
import axios from '../assets/axios.png'
import godot from '../assets/Godot_icon.png'
import GDscript from '../assets/GDscript.png'

import { Footer } from "./footer";
import { MyDivider } from "./divider";


export const Landing = () => {

    const [languageChip, setLanguageChip] = useState(false);
    const [uiChip, setUiChip] = useState(false);
    const [database, setDatabase] = useState(false);
    const [otherChip, setOtherChip] = useState(false);

    const [delayBool, setDelayBool] = useState(true);

    const [filteredCardData, setFilteredCardData] = useState([]);
    
    const cardData = [
        <CustomCard tag="UI"    iconSrc={reactIcon} bodyText='ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components' link='https://react.dev/' headerText='React' headerUrl='react.dev' linkText='View Documentation'/>,
        <CustomCard tag="UI"    iconSrc={nextUIIcon} bodyText='NextUI is a component-based CSS framework, which means it provides a set of pre-designed components you can use at any time.' link='https://nextui.org/' headerText='NextUI' headerUrl='nextui.org' linkText='View Documentation'/>,
        <CustomCard tag="UI"    iconSrc={reveal} bodyText='React Awesome Reveal is a react library that uses Web Animations API for performant animations.' link='https://react-awesome-reveal.morello.dev/' headerText='React Awesom Reveal' headerUrl='react-awesome-reveal.morello.dev' linkText='View Documentation'/>,
        <CustomCard tag="Game"  iconSrc={godot} bodyText='Godot is a cross-platform, free and open-source game engine released under the permissive MIT license. ' link='https://godotengine.org/' headerText='Godot' headerUrl='godotengine.org' linkText='View Documentation'/>,
        <CustomCard tag="UI"    iconSrc={vue} bodyText='Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page applications.' link='https://vuejs.org/' headerText='Vue' headerUrl='vuejs.org' linkText='View Documentation'/>,
        <CustomCard tag="Lang"  iconSrc={js} bodyText='JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.' link='https://developer.oracle.com/languages/javascript.html' headerText='JavaScript' headerUrl='developer.oracle.com' linkText='View Documentation'/>,
        <CustomCard tag="Other" iconSrc={github} bodyText='GitHub is a developer platform that allows developers to create, store, manage and share their code.' link='https://github.com/LoganHenig' headerText='GitHub' headerUrl='github.com/LoganHenig' linkText='View My GitHub'/>,
        <CustomCard tag="Data"  iconSrc={spring} bodyText='Spring Boot is an open-source Java-based framework used for creating standalone, production-grade Spring-based applications with minimal effort.' link='https://spring.io/projects/spring-boot' headerText='Spring Boot' headerUrl='spring.io' linkText='View Documentation'/>,
        <CustomCard tag="Data"  iconSrc={mongo} bodyText='MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product. ' link='https://www.mongodb.com/' headerText='MongoDB' headerUrl='mongodb.com' linkText='View Documentation'/>,
        <CustomCard tag="Other" iconSrc={azure} bodyText='Microsoft Azure, is a cloud computing platform run by Microsoft. It offers access, management, and the development of applications and services through global data centers.' link='https://azure.microsoft.com/' headerText='Azure Dev Ops' headerUrl='azure.microsoft.com' linkText='View Documentation'/>,
        <CustomCard tag="Lang" iconSrc={GDscript} bodyText='GDScript is a dynamically and statically typed scripting language for integration with the Godot game engine.' link='https://gdscript.com/' headerText='GD script' headerUrl='gdscript.com' linkText='View Documentation'/>,
        <CustomCard tag="Lang"  iconSrc={java} bodyText='Java is a high-level, class-based, object-oriented programming language that is designed with few dependencies and a write once, run anywhere architecture.' link='https://www.java.com/en/' headerText='Java' headerUrl='java.com' linkText='View Documentation'/>,
        <CustomCard tag="Lang"  iconSrc={cpp} bodyText='C++ is a cross-platform language that can be used to create high-performance applications. C++ gives programmers control over system resources and memory.' link='https://www.w3schools.com/cpp/default.asp' headerText='C++' headerUrl='w3schools.com/CPP' linkText='View Documentation'/>,
        <CustomCard tag="Lang"  iconSrc={python} bodyText='Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.' link='https://www.python.org/doc/' headerText='Python' headerUrl='python.org' linkText='View Documentation'/>,
        <CustomCard tag="Data"  iconSrc={sql} bodyText='Structured Query Language is a domain-specific language used to manage data, especially in a relational database management system.' link='https://www.w3schools.com/sql' headerText='SQL' headerUrl='w3schools.com/sql' linkText='View Documentation'/>,
        <CustomCard tag="Lang"  iconSrc={html} bodyText='HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.' link='https://www.w3schools.com/html/' headerText='HTML' headerUrl='w3schools.com/html' linkText='View Documentation'/>,
        <CustomCard tag="UI"    iconSrc={axios} bodyText='Axios is a promise-based HTTP client that works both in the browser and in a Node.js environment. It provides a single API for dealing with XMLHttpRequests and node’s http interface.' link='https://axios-http.com/docs' headerText='Axios' headerUrl='axios-http.com' linkText='View Documentation'/>,
        // <CustomCard  iconSrc={} bodyText='' link='' headerText='' headerUrl='' linkText='View Documentation'/>,  
    ]
    useEffect(() =>{    
        let tempCards = [];
        if(languageChip){
            tempCards = [...tempCards, cardData.filter((card) => card.props.tag ==="Lang")];
            console.log(tempCards)
        } 
        if(database){
            tempCards = [...tempCards, cardData.filter((card) => card.props.tag ==="Data")];
            console.log(tempCards)
        } 
        if(uiChip){
            tempCards = [...tempCards, cardData.filter((card) => card.props.tag ==="UI")];
            console.log(tempCards)
        }
        if(otherChip){
            tempCards = [...tempCards, cardData.filter((card) => card.props.tag ==="Other")];
            console.log(tempCards)
        } 
        if(!uiChip && !languageChip && !database && !otherChip){
            tempCards = cardData
        }
        setFilteredCardData(tempCards)
    },[languageChip, database, uiChip, otherChip]);

    useEffect(() =>{
        console.log(delayBool)
    },[delayBool])


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const clearCards = (async (time) =>{
        setDelayBool(false);
        await delay(time)
        setDelayBool(true);
    })


  return (
    <main className="dark text-foreground bg-background fill-screen">
    <NavBar></NavBar>
    <div className="center-content">
        <div className='name-container'>
         {/* <Fade delay={1000}> */}
            <h1 className='my-name'>Logan Henig</h1>
        {/* </Fade>    */}

    </div>

    <div className='about-container'> 
        {/* <Fade delay={800}> */}
            <div>&#60;h1&#62; Hello, &#60;/h1&#62;</div> 
            <div>&#60;div&#62; Welcome to my portfolio! I am a fullstack web developer from Michigan &#60;/div&#62;</div>
        {/* </Fade> */}
    </div>
    {/* <Fade delay={300}> */}
        <MyDivider/>
    {/* </Fade> */}

    <h3 className='technology-used'> Below is are cards showing the Technology I used to make this app.</h3>
    
    <div className="tech-continer" >
        {/* <Fade delay={100}> */}
            <CustomCard  iconSrc={reactIcon} bodyText='ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on components' link='https://react.dev/' headerText='React' headerUrl='react.dev' linkText='View Documentation'/>
        {/* </Fade> */}
        {/* <Fade delay={200}> */}
            <CustomCard  iconSrc={nextUIIcon} bodyText='NextUI is a component-based CSS framework, which means it provides a set of pre-designed components you can use at any time.' link='https://nextui.org/' headerText='NextUI' headerUrl='nextui.org' linkText='View Documentation'/>
        {/* </Fade> */}
        {/* <Fade delay={300}> */}
            <CustomCard  iconSrc={reveal} bodyText='React Awesome Reveal is a react library that uses Web Animations API for performant animations.' link='https://react-awesome-reveal.morello.dev/' headerText='React Awesom Reveal' headerUrl='react-awesome-reveal.morello.dev' linkText='View Documentation'/>
        {/* </Fade> */}
    </div>    
    <h3 className='technology-used'> Technology I have used to make other projects </h3>
    <div className="chip-container">
        <div className="fliter-and-chips">
            <div className="filter">Filters:</div> 
            <div className="flex gap-4 flex-start flex-wrap">
                
                <Chip className="chip" onClick={() => {setLanguageChip(!languageChip); clearCards(1000);}} color={`${languageChip ? "primary" : "default"}`}>Coding Languages</Chip>
                <Chip className="chip" onClick={() => {setUiChip(!uiChip); clearCards(1000);}} color={`${uiChip ? "primary" : "default"}`}>User Interface</Chip>
                <Chip className="chip" onClick={() => {setDatabase(!database); clearCards(1000);}} color={`${database ? "primary" : "default"}`}>Backend/Database</Chip>
                <Chip className="chip" onClick={() => {setOtherChip(!otherChip); clearCards(1000);}} color={`${otherChip ? "primary" : "default"}`}>Other</Chip>
            </div> 
        </div>
    </div>
    <div className="tech-continer" >

        {delayBool && (
        filteredCardData.map((element, i) =>{
            // return(<Fade delay={i*40}> {element} </Fade>)

            return({element})
        })
        )}
        {!delayBool &&
        <div className="loading">
        <CircularProgress aria-label="Loading..." />
        </div>
        }
    </div> 
    </div>
    <Footer/>

    </main>
    )
  
}    