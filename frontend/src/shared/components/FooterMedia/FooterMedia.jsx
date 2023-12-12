// import React, { useState } from "react"
import { Box } from '@mui/material';
import telegram from "../../../image/tel.png"
import facebook from "../../../image/face.png"
import instagram from "../../../image/inst.png"
// import logotip from "../../../image/logoLitlib.png"

import './FooterMedia.scss'

export function FooterMedia() {

    return (

        <Box display="flex" gap= "5vh" flex-direction="row" className="footerMedia">
            <div className="footerMedia__picture__inst"><img src={instagram} alt="instagram" className="footerMedia__picture__inst__img" /></div>
            <div className="footerMedia__picture__tel"><img src={telegram} alt="telegram" className="footerMedia__picture__tel__img" /></div>
            <div className="footerMedia__picture__face"><img src={facebook} alt="facebook" className="footerMedia__picture__face__img" /></div>
        </Box>
    )
}