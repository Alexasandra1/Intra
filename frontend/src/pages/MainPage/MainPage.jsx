import React, { useState } from "react"
import { Header } from '../../shared/components/Header/Header';
import { HeaderText } from '../../shared/components/HeaderText/HeaderText';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { TextCard } from '../../shared/components/TextCard/TextCard';
import { Chair } from '../../shared/components/Chair/Chair';
import { ImgCard } from '../../shared/components/ImgCard/ImgCard';
// import { Button } from '../../shared/components/Button/Button';
import card from "../../image/cardPic.png"
import card2 from "../../image/cardPic2.png"
import card3 from "../../image/cardPic3.png"
import ins from "../../image/ins.png"
import Popup from 'reactjs-popup';
import './MainPage.scss'
import { Footer } from "../../shared/components/Footer/Footer";

export function MainPage() {

    return (
        <div className="body">
            <Header ></Header>
            {/* <Header onClick={handleAboutUsClick} handleAboutUsClick={handleAboutUsClick()} handleInstructionClick={handleInstructionClick()}></Header> */}
            <main className="mainpage__main">
                <Chair chairWord="INTRA"></Chair>
                <div className="mainpage__main__container">
                    <ImgCard image={card} styleImage="mainPage__main__container__img"
                        text="Do you want to transform your living space into a beautiful and functional environment? Whether you need to redecorate your home, office, we can help you achieve your vision."
                        styleText="mainPage__main__container__text"
                    ></ImgCard>
                    <ImgCard image={card2} styleImage="mainPage__main__container__img"
                        text="You want me to come up with a short description for a card with information about the personal account and the device for working as a designer Intra, right?"
                        styleText="mainPage__main__container__text"
                    ></ImgCard>
                    <ImgCard image={card3} styleImage="mainPage__main__container__img"
                        text="Intra is a leading company in the field of interior design and architecture. We offer innovative and customized solutions for residential, commercial, and public spaces."
                        styleText="mainPage__main__container__text"
                    ></ImgCard>

                    {/* <div className="mainpage__main__container__cardFisrt">
                        <div className="mainpage__main__container__cardFisrt__picture"><img src={card} alt="design" className="mainpage__main__container__cardFisrt__img" /></div>
                        <div className="mainpage__main__container__cardFisrt__description">Do you want to transform your living space into a beautiful and functional environment? Whether you need to redecorate your home, office, we can help you achieve your vision.</div>
                      <Button styleButton="mainpage__main__container__card__button" word="GO TO"></Button>
                        {/* <Popup trigger=
                            {<button> Click to open popup </button>}
                            position="right center">
                            <HeaderText style="popupStyle" word="popud was opened" />
                        </Popup> */}
                    {/* </div> */}
                    {/* <div className="mainpage__main__container__cardSecond">
                        <div className="mainpage__main__container__cardSecond__picture"><img src={card2} alt="design" className="mainpage__main__container__cardSecond__img" /></div>
                        <div className="mainpage__main__container__cardSecond__description">You want me to come up with a short description for a card with information about the personal account and the device for working as a designer Intra, right?</div>
                        <Button styleButton="mainpage__main__container__card__button" word="GO TO"></Button>
                    </div>
                    <div className="mainpage__main__container__cardThird">
                        <div className="mainpage__main__container__cardThird__picture"><img src={card3} alt="design" className="mainpage__main__container__cardThird__picture__img" /></div>
                        <div className="mainpage__main__container__cardThird__description">Intra is a leading company in the field of interior design and architecture. We offer innovative and customized solutions for residential, commercial, and public spaces. </div>
                        <Button styleButton="mainpage__main__container__card__button" word="GO TO"></Button>
                    </div> */}
                </div>
                <InformationBlock styleInfo="first_type  mainInformation" image={ins} styleImage="styleImageHousesMain"
                    textBlocks={
                        [{
                            title: "Design Your Dream",
                            text: "Proply is a company that offers a new way of buying and selling properties online. Founded by Dana Bokanovskaya, a former real estate agent and entrepreneur, Proply aims to make the process of property transactions faster, easier, and more transparent. Proply uses artificial intelligence and blockchain technology to match buyers and sellers, provide instant valuations, and facilitate secure payments. Proply is revolutionizing the real estate industry with its innovative and customer-centric approach.",
                            styleTitle: "title_main",
                            styleText: "text_main"
                        }]}></InformationBlock>
            </main>
            <Footer></Footer>

        </div>
    )
}