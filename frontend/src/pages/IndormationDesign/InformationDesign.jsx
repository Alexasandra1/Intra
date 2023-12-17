import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
import { Button } from '../../shared/components/Button/Button';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { OrderCard } from '../../shared/components/OrderCard/OrderCard'; 
import infoDesign from "../../image/infDesign.png"
import toast from 'react-hot-toast';

import './InformationDesign.scss';

export function InformationDesign() {
    const { id } = useParams();
    const [designInfo, setDesignInfo] = useState(null);
    const [styleData, setStyleData] = useState(null);
    const [designerData, setDesignerData] = useState(null);
    const [isOrderCardVisible, setIsOrderCardVisible] = useState(false);
    let navigate = useNavigate();

    async function deleteDesignAndRedirect() {
        try {
            const response = await fetch(`http://localhost:3000/api/DeleteDesign/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                toast.error();
            }
            else{
                toast.success('design was deleted')
            }
            navigate(`/design`);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }
    useEffect(() => {
        async function fetchDesignInfo() {
            try {
                const response = await fetch(`http://localhost:3000/api/GetDesign/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const designData = await response.json();
                setDesignInfo(designData);

                if (designData.style_id) {
                    const styleResponse = await fetch(`http://localhost:3000/api/GetStyle/${designData.style_id}`);
                    if (!styleResponse.ok) { 
                        throw new Error(`HTTP error! status: ${styleResponse.status}`); 
                    } 
                    const styleData = await styleResponse.json();
                    setStyleData(styleData);
                }

                
                if (designData.designer_id) {
                    const designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${designData.designer_id}`);
                    if (!designerResponse.ok) { 
                        throw new Error(`HTTP error! status: ${designerResponse.status}`); 
                    } 
                    const designerData = await designerResponse.json();
                    setDesignerData(designerData);
                }


            } catch (error) {
                console.error('Ошибка:', error);
            }
        }

        if (id) {
            fetchDesignInfo();
        }
    }, [id]);

    const handleOrderButtonClick = () => {
        setIsOrderCardVisible(true);
    };

    const handleCloseOrderCard = () => {
        setIsOrderCardVisible(false);
    };

    return (
        <div className="informationDesign__body">
            <Header></Header>
            <main className="informationDesign__main">
                <div className="informationDesign__main__container">
                    <div className="informationDesign__main__container__pictures">
                        <img src={infoDesign} alt="design" className="informationDesignmaincontainer__pictures__img"></img>
                    </div>
                    <div className="informationDesign__main__container__textBlock">
                        {designInfo && styleData && designerData &&(
                            <TextBlocInInformationDesign
                                titleStyleTextBlocInInformationDesign={designInfo.name}
                                designerStyleTextBlocInInformationDesign={designerData.name}
                                styleStyleTextBlocInInformationDesign={styleData.style_name}
                                yearStyleTextBlocInInformationDesign={designInfo.year}
                                priceStyleTextBlocInInformationDesign={designInfo.price}
                            />
                        )}
                        <div className="informationDesign__main__container__textBlock__buttons">

                        <Button
                            styleButton="informationDesign__button"
                            wordButton="Order"
                            onClick={handleOrderButtonClick} // Добавьте обработчик события для кнопки
                        ></Button>
                         <Button
                            styleButton="informationDesign__button__delete"
                            wordButton="?"
                            onClick={deleteDesignAndRedirect}
                        ></Button>
                        </div>
                        {isOrderCardVisible && <OrderCard onClose={handleCloseOrderCard} id={designInfo.id} />} {/* Покажите OrderCard, если isOrderCardVisible установлен в true */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
// import { Button } from '../../shared/components/Button/Button';
// import { Header } from '../../shared/components/Header/Header';
// import { Footer } from "../../shared/components/Footer/Footer";
// import { OrderCard } from '../../shared/components/OrderCard/OrderCard'; 
// import infoDesign from "../../image/infDesign.png"
// import './InformationDesign.scss';

// export function InformationDesign() {
//     const { id } = useParams();
//     const [designInfo, setDesignInfo] = useState(null);
//     const [styleData, setStyleData] = useState(null);
//     const [designerData, setDesignerData] = useState(null);
//     const [isOrderCardVisible, setIsOrderCardVisible] = useState(false);
//     console.log(id);
//     useEffect(() => {
//         async function fetchDesignInfo() {
//             try {
//                 const response = await fetch(`http://localhost:3000/api/GetDesign/${id}`);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const designData = await response.json();
//                 setDesignInfo(designData);

//                 if (designData.style_id) {
//                     const styleResponse = await fetch(`http://localhost:3000/api/GetStyle/${designData.style_id}`);
//                     if (!styleResponse.ok) { 
//                         throw new Error(`HTTP error! status: ${styleResponse.status}`); 
//                     } 
//                     const styleData = await styleResponse.json();
//                     setStyleData(styleData);
//                 }

                
//                 if (designData.designer_id) {
//                     const designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${designData.designer_id}`);
//                     if (!designerResponse.ok) { 
//                         throw new Error(`HTTP error! status: ${designerResponse.status}`); 
//                     } 
//                     const designerData = await designerResponse.json();
//                     setDesignerData(designerData);
//                 }


//             } catch (error) {
//                 console.error('Ошибка:', error);
//             }
//         }

//         if (id) {
//             fetchDesignInfo();
//         }
//     }, [id]);

//     const handleOrderButtonClick = () => {
//         setIsOrderCardVisible(true);
//     };

//     const handleCloseOrderCard = () => {
//         setIsOrderCardVisible(false);
//     };

//     return (
//         <div className="informationDesign__body">
//             <Header></Header>
//             <main className="informationDesign__main">
//                 <div className="informationDesign__main__container">
//                     <div className="informationDesignmaincontainer__pictures">
//                         <img src={infoDesign} alt="design" className=""></img>
//                     </div>
//                     <div className="informationDesignmaincontainer__textBlock">
//                         {designInfo && styleData && designerData &&(
//                             <TextBlocInInformationDesign
//                                 titleStyleTextBlocInInformationDesign={designInfo.name}
//                                 designerStyleTextBlocInInformationDesign={designerData.name}
//                                 styleStyleTextBlocInInformationDesign={styleData.style_name}
//                                 yearStyleTextBlocInInformationDesign={designInfo.year}
//                                 priceStyleTextBlocInInformationDesign={designInfo.price}
//                             />
//                         )}
//                         <Button
//                             styleButton="informationDesign__button"
//                             wordButton="Order"
//                             onClick={handleOrderButtonClick()} // Добавьте обработчик события для кнопки
//                         ></Button>
//                         {isOrderCardVisible && <OrderCard onClose={handleCloseOrderCard} id={designInfo.id} />} {/* Покажите OrderCard, если isOrderCardVisible установлен в true */}
//                     </div>
//                 </div>
//             </main>
//             <Footer></Footer>
//         </div>
//     );
// }
