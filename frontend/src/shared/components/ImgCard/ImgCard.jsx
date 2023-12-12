import React, { useState } from "react"
import { Button } from '../Button/Button';
import './ImgCard.scss'

export function ImgCard(props) {

    return (
        <div className="cardImg">
            <img src={props.image} alt="main" className={`main-image ${props.styleImage}`} />
            <div
                // className="card__title" 
                className={`card__title ${props.styleText}`}>
                {props.text}
            </div>
            <Button styleButton="mainpage__main__container__card__button" wordButton="GO TO"></Button>
        </div>
    )
}