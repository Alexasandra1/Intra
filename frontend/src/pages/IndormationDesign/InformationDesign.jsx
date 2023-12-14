import React, { useState } from "react"
import { Header } from '../../shared/components/Header/Header';
import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
import { TextCard } from '../../shared/components/TextCard/TextCard';
import { Chair } from '../../shared/components/Chair/Chair';
import { ImgCard } from '../../shared/components/ImgCard/ImgCard';
import { Button } from '../../shared/components/Button/Button';
import Popup from 'reactjs-popup';
import './InformationDesign.scss'
import { Footer } from "../../shared/components/Footer/Footer";

export function InformationDesign() {

    return (
        <div className="informationDesign__body">
            <Header ></Header>
            <main className="informationDesign__main">
                <div className="informationDesign__main__container">
                    <div className="informationDesign__main__container__pictures"></div>
                    <div className="informationDesign__main__container__textBlock">
                        <TextBlocInInformationDesign ></TextBlocInInformationDesign>
                        <Button styleButton="InformationDesign__button" wordButton="Order"></Button>
                    </div>
                </div>
            </main>
            <Footer></Footer>

        </div>
    )
}