import React, { useEffect, useState } from "react";

export const PopUp = (props) => {
    console.log(props.animation)

    return(
        <>
            <div className={`popup-container ${props.animation}`}>
                <div className="popup-text">
                    <b>Thank You!</b>
                    <div>Email has been copied.</div>
                </div>
            </div>
        </>
    );
}
