import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade"
import { Tile } from "./Tile";
import {Chip} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { keyframes } from "@emotion/react";
export const Animation = () => {
    const [col, setCol] = useState(0);
    const [row, setRow] = useState(0);
    const [anime, setAnime] = useState("");
    const [squareArr,setSquareArr] = useState([]);
    const [showName,setShowName] = useState(true);
    const navigate = useNavigate();
     // USING 75 PX FOR SQUARE SIZE
    useEffect(() => {
        setColRow();
    },[]);

    window.onresize = () =>{
        setColRow();
    }
    const setColRow = () =>{
        setCol(Math.floor(document.body.clientWidth / 75));
        setRow(Math.floor(document.body.clientHeight / 75));
    }

    useEffect(() =>{
        setGrid()
    },[col, row]);

    const setGrid = () => {
        console.log("clicked")
        setSquareArr([]);
        let rows = [];
        // for (var i = 0; i < col*row; i++){
        //     rows.push(<Tile key={i} id={i} number={i}></Tile>)
        // }

        for (var i = 0; i < col; i++){
          let cell = []
          for (var j = 0; j < row; j++){
            cell.push(<div  key={j} id={j}></div>)
          }
          rows.push(cell)
        }
        setSquareArr(rows)
    }
    useEffect(() =>{
        if(squareArr.length <= 0){
            setGrid();
        }
    },[squareArr])
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const aboutToNavigate = async url =>{ 
    setAnime("hidden")
    await delay(2500);
    navigate(url);
    }

  return (
    <>
            <div  id="grid" onClick={() => {setSquareArr([]) }}>
            {squareArr.length > 0 &&

                squareArr.map((row, i) => (
                // {row}
                <>{
                    row.map((col,j)=> <Fade delay={50*j}><Tile hidden={anime}> {col}</Tile></Fade>)
                    }</>
            ))}
            </div>
        
        {/* {
            squareArr   THIS WORKS
        } */}

            {/* CENTERED TEXT */}
        <Fade delay={1500} Animation="bounceInRight">    
              
            <div className="logan-henig">
                <div className="logan-henig-background">
                    <div className="flex-container font">	&#60;div&#62; Logan Henig &#60;/div&#62;</div>
                </div>

                {/* <Chip className="chip" onClick={() => {setLanguageChip(!languageChip); clearCards(1000);}} color={`${languageChip ? "primary" : "default"}`}>Language</Chip> */}

                <Chip className="chip click-me clickme-chip" size="lg" onClick={() => {aboutToNavigate("../portfolio")}} variant="bordered" color={'primary'}>ClickME</Chip>
            </div>
            

        </Fade>
    </>
    ) 
}    