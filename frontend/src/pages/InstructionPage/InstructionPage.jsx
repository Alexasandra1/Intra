import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Chair } from '../../shared/components/Chair/Chair';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { Footer } from "../../shared/components/Footer/Footer";
import Enter from "../../image/Enter.png"
import User from "../../image/User.png"
import Design from "../../image/Design.png"
import './InstructionPage.scss'
import ins from "../../image/ins.png"

export function InstructionPage() {


    return (
        <div className="instrucyion__body">
            <Header></Header>
            <Chair chairWord="INSTRUCTION"></Chair>
            <main className="instructionPage__main">
                <div className="instructionPage__main__text">
                    The Intra website is designed for ordering services for interior design. You can choose the type of design you need, specify your budget, deadlines and wishes, and get a ready-made design from a professional designers. To use the Intra website, you need to do the following steps:
                    {/* <div className="instructionPage__main__container__img">
                        <img src={ins} alt="design" className="aboutUs__main__container__img__desing" />
                    </div>
                    <div className="instructionPage__main__container__text">
                        <div className="instructionPage__main__container__text__title">The Story of a Design Dream</div>
                        <div className="instructionPage__main__container__text__description">Professional and Affordable Design Services Are you looking for a way to make your website, logo, flyer, or business card stand out from the crowd? Do you want to impress your customers and clients with a stunning and unique design? If yes, then you have come to the right place. Design Your Dream is a team of experienced and talented designers who can help you create the perfect design for your needs. Whether you need a simple logo, a complex website, or anything in between, we can handle it. We offer high-quality design services at affordable prices, and we guarantee your satisfaction. Contact us today and let us design your dream.</div>
                    </div> */}
                </div>

                <InformationBlock styleInfo="first_type instructionType" image={Enter} styleImage="instructionPage__main__Img" textBlocks={
                    [{
                        text: "Register on the website by filling out the form on the main page. Enter your name, email, password and phone number. Confirm your registration by following the link that will be sent to your email.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction first_type_text"
                    },
                    {
                        text: "Log in to your personal account using your email and password. In your personal account, you will be able to view and edit your profile, your orders and reviews.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction first_type_text"
                    }
                    ]}></InformationBlock>

                <InformationBlock styleInfo="second_type instructionType" image={User} styleImage="instructionPage__main__Img" textBlocks={
                    [{
                        text: "Register on the website by filling out the form on the main page. Enter your name, email, password and phone number. Confirm your registration by following the link that will be sent to your email.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction second_type_text"
                    },
                    {
                        text: "Log in to your personal account using your email and password. In your personal account, you will be able to view and edit your profile, your orders and reviews.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction second_type_text"
                    }
                    ]}></InformationBlock>

                <InformationBlock styleInfo="first_type instructionType" image={Design} styleImage="instructionPage__main__Img" textBlocks={
                    [{
                        text: "Register on the website by filling out the form on the main page. Enter your name, email, password and phone number. Confirm your registration by following the link that will be sent to your email.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction first_type_text"
                    },
                    {
                        text: "Log in to your personal account using your email and password. In your personal account, you will be able to view and edit your profile, your orders and reviews.",
                        // styleTitle: "title_about",
                        styleText: "text_instruction first_type_text"
                    }
                    ]}></InformationBlock>


            </main>
            <Footer></Footer>
        </div>
    )
}