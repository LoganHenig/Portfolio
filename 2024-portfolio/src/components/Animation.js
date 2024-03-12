import React, { useEffect, useState } from "react";
import { Fade,AttentionSeeker, Hinge } from "react-awesome-reveal";
import { Tile } from "./Tile";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export const Animation = () => {
    const [col, setCol] = useState(0);
    const [row, setRow] = useState(0);
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
            cell.push(<Tile key={j} id={j}></Tile>)
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
    const aboutToNavigate = url =>{
        navigate(url);
    }

  return (
    <>

        <div  id="grid" onClick={() => {setSquareArr([]) }}>
        {squareArr.length > 0 &&

            squareArr.map((row, i) => (
            // {row}
            <><Fade cascade={true} damping={.1}>{row}</Fade></>
        ))}

        </div>
        {/* {
            squareArr   THIS WORKS
        } */}

            {/* CENTERED TEXT */}
        <Fade delay={1500} Animation="bounceIntRight">    
              
            <div className="logan-henig">
                <span className="flex-container">Logan Henig</span>

                <Button onClick={()=>{aboutToNavigate("../portfolio")}} radius="full" className=" click-me bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">

                {/* <Button onClick={()=>{setShowName(!showName)}} radius="full" className=" click-me bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"> */}
                    Click ME
                </Button>
            </div>

        </Fade>
    </>
    ) 
}    