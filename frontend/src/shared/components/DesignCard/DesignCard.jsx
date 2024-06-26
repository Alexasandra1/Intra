import React, { useState } from "react"
import { FooterMedia } from '../../components/FooterMedia/FooterMedia';

import { HeaderText } from "../HeaderText/HeaderText";
import { Copyright } from "../Copyright/Copyright";
import infoDesign from "../../../image/infDesign.png"
// import logotip from "../../../image/logoLitlib.png"

import './DesignCard.scss'

export function DesignCard(props) {
    function handleClick() {
        if (props.onClick) {
            props.onClick();
        }
    }

    return (

        <div className="designCard">
            <div className="designCard_cont"
                onClick={handleClick}>

                <div className="designCard__img"> <img src={infoDesign} alt="design" className={`designCard__img__picture ${props.styleDesignImage}`}></img></div>
                <div className="designCard__textBlock">
                    <div className={`designCard__textBlock__nameDesign`}>{props.DesignName}</div>
                    <div className={`designCard__textBlock__nameDesigner`}>Designer: {props.DesignerName}</div>
                    <div className={`designCard__textBlock__price`}>{props.DesignPrice}</div>
                </div>
            </div>
        </div>
    )
}
//{`data:image/png;base64,${designImage}`}