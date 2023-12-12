import React, { useState } from "react"
import { Box } from '@mui/material';
import { FooterMedia } from '../../components/FooterMedia/FooterMedia';
import { HeaderText } from "../HeaderText/HeaderText";
import { Copyright } from "../Copyright/Copyright";
// import logotip from "../../../image/logoLitlib.png"

import './Footer.scss'

export function Footer() {

    return (

        <footer className="footer">

            <FooterMedia></FooterMedia>
            <Box className="footer__box" display="flex" flex-direction="row" gap="30px">
                <HeaderText word="Designs" style="footer__box__designs" />
                <HeaderText word="Instruction" style="footer__box__instruction" />
                <HeaderText word="About Us" style="footer__box__aboutUs" />
            </Box>
            <Copyright copyrightStyle="copyrightStyle" copyrightWord="Copyright 2023; Designed by Penina Valeria"></Copyright>
            {/* <HeaderText word="Copyright 2023 Penina Valeria" style="footer__copyright" /> */}

            {/* <div className="header__container__logo__text">Intra</div> */}

        </footer>
    )
}