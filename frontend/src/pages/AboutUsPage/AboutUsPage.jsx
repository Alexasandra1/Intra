import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Chair } from '../../shared/components/Chair/Chair';

import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';

import { TextCard } from '../../shared/components/TextCard/TextCard';
import './AboutUsPage.scss'
import aboutUs from "../../image/aboutUs.png"
import aboutUs2 from "../../image/aboutUs2.png"
import { Footer } from "../../shared/components/Footer/Footer";

export function AboutUsPage() {


    return (
        <div className="aboutUs__body">
            <Header></Header>
            <Chair chairWord="ABOUT US"></Chair>
            <main className="aboutUs__main">
                <div className="aboutUs__main__container">
                    <div className="aboutUs__main__containerFirst">
                        <InformationBlock styleInfo="first_type" image={aboutUs} styleImage="aboutUs__firstImg" textBlocks={
                            [{
                                title: "The Story of a Design Dream",
                                text: "Intra is not just a name. It’s a vision. A vision of creating beautiful and functional designs for everyone. Intra was born in 2022, when Alexey Ivanov, a young and talented designer from Belarus, decided to turn his passion into a profession. He started by offering his design services online, using his skills and creativity to help his clients achieve their goals. Soon, he realized that he needed a platform to showcase his work and connect with more customers. That’s how Intra was born. Intra is a website that showcases Alexey’s portfolio and offers his design services to anyone who needs them. Whether you need a logo, a website, a flyer, or anything else, Alexey can help you create it.",
                                styleTitle: "title_about",
                                styleText: "text_about first_type_text"
                            }]}></InformationBlock>
                        {/* <div className="aboutUs__main__containerFirstr__img">
                            <img src={aboutUs} alt="design" className="aboutUs__main__containerFirst__img__desing" />
                        </div>
                        {/* <div className="aboutUs__main__containerFirst__text"> */}
                        {/* <TextCard styleTitle="aboutUs__main__containerFirst__title" title="The Story of a Design Dream"
                            styleDescription="aboutUs__main__containerFirst__description"
                            description="Intra is not just a name. It’s a vision. A vision of creating beautiful and functional designs for everyone. Intra was born in 2022, when Alexey Ivanov, a young and talented designer from Belarus, decided to turn his passion into a profession. He started by offering his design services online, using his skills and creativity to help his clients achieve their goals. Soon, he realized that he needed a platform to showcase his work and connect with more customers. That’s how Intra was born. Intra is a website that showcases Alexey’s portfolio and offers his design services to anyone who needs them. Whether you need a logo, a website, a flyer, or anything else, Alexey can help you create it."></TextCard> */}
                        {/* <div className="aboutUs__main__container__text__title">The Story of a Design Dream</div>
                        <div className="aboutUs__main__container__text__description">Intra is not just a name. It’s a vision. A vision of creating beautiful and functional designs for everyone. Intra was born in 2022, when Alexey Ivanov, a young and talented designer from Belarus, decided to turn his passion into a profession. He started by offering his design services online, using his skills and creativity to help his clients achieve their goals. Soon, he realized that he needed a platform to showcase his work and connect with more customers. That’s how Intra was born. Intra is a website that showcases Alexey’s portfolio and offers his design services to anyone who needs them. Whether you need a logo, a website, a flyer, or anything else, Alexey can help you create it.</div> */}
                        {/* </div>  */}
                    </div>
                    <div className="aboutUs__main__containerSecond">
                        <InformationBlock styleInfo="second_type" image={aboutUs2} styleImage="aboutUs__firstImg" textBlocks={
                            [{
                                title: "The Best Design Services Online",
                                text: "Intra is a website that offers you the best design services online. Whether you need a logo, a website, a flyer, or anything else, Intra can help you create it. Intra is run by Alexey Ivanov, a professional and experienced designer from Belarus, who has a passion for design and a knack for innovation. Alexey has worked with hundreds of clients from different industries and countries, delivering high-quality and unique designs that meet their needs and expectations. Alexey can handle any type of design project, from simple to complex, from personal to professional. He can also work with any style, from minimalist to extravagant, from modern to classic. No matter what you need, Alexey can design it for you. Contact him today and get a free quote for your design project.",
                                styleTitle: "title_about",
                                styleText: "text_about second_type_text"
                            }]}></InformationBlock>
                        {/* <TextCard styleTitle="aboutUs__main__containerSecond__title"
                            title="The Best Design Services Online"
                            styleDescription="aboutUs__main__containerSecond__description"
                            description="Intra is a website that offers you the best design services online. Whether you need a logo, a website, a flyer, or anything else, Intra can help you create it. Intra is run by Alexey Ivanov, a professional and experienced designer from Belarus, who has a passion for design and a knack for innovation. Alexey has worked with hundreds of clients from different industries and countries, delivering high-quality and unique designs that meet their needs and expectations. Alexey can handle any type of design project, from simple to complex, from personal to professional. He can also work with any style, from minimalist to extravagant, from modern to classic. No matter what you need, Alexey can design it for you. Contact him today and get a free quote for your design project."></TextCard>
                        <div className="aboutUs__main__containerSecond__img">
                            <img src={aboutUs2} alt="design" className="aboutUs__main__containerSecond__img__desing" />
                        </div> */}

                    </div>

                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}