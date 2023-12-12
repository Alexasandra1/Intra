import React, { useState } from "react"

import './TextCard.scss'

export function TextCard(props) {

    return (
        <div className="card">
            <div 
            // className="card__title" 
            className={`card__title ${props.styleTitle}`}>
                {props.title}
            </div>
            <div 
            // className="card__description">
            className={`card__description ${props.styleDescription}`}>
                {props.description}
            </div>
        </div>
    )
}