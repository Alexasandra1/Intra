import React, { useState } from "react"
import { Button } from '../Button/Button';import { useNavigate, useLocation } from "react-router-dom";
import './ImgCard.scss'

export function ImgCard(props) {
    const navigate = useNavigate();

    async function handleAboutUsClick() {
        navigate("/aboutus");
    }

    return (
        <div className="cardImg">
            <img src={props.image} alt="main" className={`main-image ${props.styleImage}`} />
            <div
                // className="card__title" 
                className={`card__title ${props.styleText}`}>
                {props.text}
            </div>
            <Button styleButton="mainpage__main__container__card__button" wordButton="GO TO" onClick={handleAboutUsClick}></Button>
        </div>
    )
}