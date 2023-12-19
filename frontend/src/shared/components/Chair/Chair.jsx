import React, { useState } from "react"
import chair from "../../../image/chair2.png"

import './Chair.scss'

export function Chair(props) {

    return (

        <div className="chair">
            <img src={chair} alt="chair" className="chair__img"></img>
            <div className={`chair__text ${props.chairStyle}`}>{props.chairWord}</div>
        </div>

    )
}