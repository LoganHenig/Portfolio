import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tile } from "./Tile";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


export const Animation = () => {
    const [col, setCol] = useState(0);
    const [row, setRow] = useState(0);
    const [squareArr,setSquareArr] = useState([]);
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
        console.log(Math.floor(document.body.clientHeight) + " height")
    }

    useEffect(() =>{
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
    },[col, row])
    useEffect(()=>{
        console.log('arr')
        console.log(squareArr); 
    },[squareArr])
  return (
    <>
    <div id="grid">
        <Fade cascade={true} damping={.1}>
        <div  id="grid">
        {squareArr.length > 0 &&

            squareArr.map((row, i) => (
            // {row}
            <><Fade cascade={true} damping={.1}>{row}</Fade></>
        ))}
        </div>
        {/* {
            squareArr   THIS WORKS
        } */}
        </Fade>
    </div>
    {/* CENTERED TEXT */}
    <Fade delay={1500} Animation="bounceIntRight">
    <div className="absolute">
        <div className="flex-logan">
            <div className="logan-henig">
                Logan Henig
            </div>
            <Button onClick={()=>{navigate("../portfolio")}} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Click ME
            </Button>
        </div>
    </div>
    </Fade>

    </>
    ) 
}    