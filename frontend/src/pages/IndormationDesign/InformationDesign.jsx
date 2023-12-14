import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
import { Button } from '../../shared/components/Button/Button';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { OrderCard } from '../../shared/components/OrderCard/OrderCard'; // Импортируйте компонент OrderCard
import './InformationDesign.scss';

export function InformationDesign() {
    const { id } = useParams();
    const [designInfo, setDesignInfo] = useState(null);
    const [isOrderCardVisible, setIsOrderCardVisible] = useState(false); // Состояние для управления видимостью OrderCard

    useEffect(() => {
        async function fetchDesignInfo() {
            try {
                const response = await fetch(`http://localhost:3000/api/GetDesign/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const designData = await response.json();
                setDesignInfo(designData);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }

        if (id) {
            fetchDesignInfo();
        }
    }, [id]);

    // Функция для открытия OrderCard
    const handleOrderButtonClick = () => {
        setIsOrderCardVisible(true);
    };

    return (
        <div className="informationDesign__body">
            <Header></Header>
            <main className="informationDesign__main">
                <div className="informationDesignmaincontainer">
                    <div className="informationDesignmaincontainer__pictures"></div>
                    <div className="informationDesignmaincontainer__textBlock">
                        {designInfo && (
                            <TextBlocInInformationDesign
                                titleStyleTextBlocInInformationDesign={designInfo.name}
                                designerStyleTextBlocInInformationDesign={designInfo.designer_id}
                                styleStyleTextBlocInInformationDesign={designInfo.style_id}
                                yearStyleTextBlocInInformationDesign={designInfo.year}
                                priceStyleTextBlocInInformationDesign={designInfo.price}
                            />
                        )}
                        <Button
                            styleButton="informationDesign__button"
                            wordButton="Order"
                            onClick={handleOrderButtonClick} // Добавьте обработчик события для кнопки
                        ></Button>
                        {isOrderCardVisible && <OrderCard />} {/* Покажите OrderCard, если isOrderCardVisible установлен в true */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}


// import React, { useState } from "react"
// import { Header } from '../../shared/components/Header/Header';
// import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
// import { InformationBlock } from '../../shared/components/InformationBlock/InformationBlock';
// import { TextCard } from '../../shared/components/TextCard/TextCard';
// import { Chair } from '../../shared/components/Chair/Chair';
// import { ImgCard } from '../../shared/components/ImgCard/ImgCard';
// import { Button } from '../../shared/components/Button/Button';
// import Popup from 'reactjs-popup';
// import './InformationDesign.scss'
// import { Footer } from "../../shared/components/Footer/Footer";

// export function InformationDesign() {

//     return (
//         <div className="informationDesign__body">
//             <Header ></Header>
//             <main className="informationDesign__main">
//                 <div className="informationDesign__main__container">
//                     <div className="informationDesign__main__container__pictures"></div>
//                     <div className="informationDesign__main__container__textBlock">
//                         <TextBlocInInformationDesign ></TextBlocInInformationDesign>
//                         <Button styleButton="informationDesign__button" wordButton="Order"></Button>
//                     </div>
//                 </div>
//             </main>
//             <Footer></Footer>

//         </div>
//     )
// }