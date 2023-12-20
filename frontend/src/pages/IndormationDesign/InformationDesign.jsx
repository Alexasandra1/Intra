import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TextBlocInInformationDesign } from '../../shared/components/TextBlocInInformationDesign/TextBlocInInformationDesign';
import { Button } from '../../shared/components/Button/Button';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import Popup from 'reactjs-popup';
import { OrderCard } from '../../shared/components/OrderCard/OrderCard';
import infoDesign from "../../image/infDesign.png"
import toast from 'react-hot-toast';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from "docx";

import './InformationDesign.scss';

export function InformationDesign() {
    const { id } = useParams();
    const [designInfo, setDesignInfo] = useState(null);
    const [styleData, setStyleData] = useState(null);
    const [designerData, setDesignerData] = useState(null);
    const [isOrderCardVisible, setIsOrderCardVisible] = useState(false);
    const [userData, setUserData] = useState(null);

    let navigate = useNavigate();
    let user_id = localStorage.getItem('id');

    const [isOpen, setIsOpen] = useState(false);
    console.log(id)



    async function deleteDesignAndRedirect() {
        try {
            const response = await fetch(`http://localhost:3000/api/DeleteDesign/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                toast.error();
            }
            else {
                toast.success('design was deleted')
            }
            navigate(`/design`);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleConfirmed = () => {
        deleteDesignAndRedirect();
        setIsOpen(false);
    };

    const createPdf = async () => {
        const data = [`Designer: ${designerData.name}`, `Design Name:${designerData.name}`, `Design Style${styleData.style_name}`, `Design Year${designInfo.year}`, `Design price${designInfo.price}`];
        await fetch('http://localhost:3000/create-pdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        });
    }

    // const createAndDownloadDocx = async () => {
    //     // console.log(designInfo.price)
    //     try {
    //         if (!designInfo || !designerData || !styleData) {
    //             console.error('Some data is missing.');
    //             return;
    //         }
    //         console.log("kjhkjhjkhkjh")
    //         const doc = new Document();

    //         doc.addSection({
    //             properties: {},
    //             children: [
    //                 new Paragraph({
    //                     children: [
    //                         new TextRun(`Title: ${designInfo.name}\n`),
    //                         new TextRun(`Designer: ${designerData.name}\n`),
    //                         new TextRun(`Style: ${styleData.style_name}\n`),
    //                         new TextRun(`Year: ${designInfo.year}\n`),
    //                         new TextRun(`Price: ${designInfo.price}\n`),
    //                     ],
    //                 }),
    //             ],
    //         });

    //         // Save the generated Word document
    //         const buf = await Packer.toBuffer(doc);
    //         const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    //         if (typeof saveAs === 'function'){
    //             saveAs(blob, 'report.docx');
    //     }else {
    //         console.log('saveAs is not available')
    //     }
    // } catch (error) {
    //     console.error('Ошибка:', error);
    // }
    // };

    // function createAndDownloadDocx(designInfo,designerData,styleData,id ){
    //     const doc = new Document();
    //     doc.addSection({
    //         children:[
    //             new Paragraph("Dessign name: "+ designInfo.name),
    //             new Paragraph("Designer name: "+ designerData.name),
    //             new Paragraph("Style name: "+ styleData.style_name),
    //             new Paragraph("Year : "+ designInfo.year),
    //             new Paragraph("Price : "+ designInfo.price),
    //         ],
    //     });

    //     Packer.toBlob(doc).then(blob=>{
    //         saveAs(blob, `DesignInfo${id}.docx`);
    //     });
    // }

    useEffect(() => {
        async function fetchDesignInfo() {
            try {
                const response = await fetch(`http://localhost:3000/api/GetDesign/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const designData = await response.json();
                setDesignInfo(designData);

                if (user_id) {
                    const userResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${user_id}`);
                    if (!userResponse.ok) {
                    }
                    const userData = await userResponse.json();
                    setUserData(userData);
                }

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
                        {designInfo && styleData && designerData && (
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
                                onClick={handleOrderButtonClick}
                            ></Button>
                            <Button
                                styleButton="informationDesign__button"
                                wordButton="Dowload Report"
                                onClick={createPdf}
                            // onClick={()=>createAndDownloadDocx(designInfo,designerData,styleData,id )}
                            ></Button>
                            {(user_id == designerData?.id || userData?.role_id == 2) && (
                                <>

                                    <Button
                                        styleButton="informationDesign__button__delete"
                                        wordButton="?"
                                        onClick={handleOpen} />

                                    <Popup className="popupToDelete" open={isOpen} closeOnDocumentClick onClose={handleClose}>
                                        <div className="popup__content">
                                            <h2>Are you sure you want to delete?</h2>
                                            <Button
                                                styleButton="informationDesign__button"
                                                wordButton="Yes"
                                                onClick={handleConfirmed}
                                            ></Button>
                                            <Button
                                                styleButton="informationDesign__button"
                                                wordButton="No"
                                                onClick={handleClose}
                                            ></Button>
                                            {/* <button onClick={handleConfirmed}>Yes</button>
                                    <button onClick={handleClose}>Cancel</button> */}
                                        </div>
                                    </Popup>
                                </>)}
                        </div>
                        {isOrderCardVisible && <OrderCard onClose={handleCloseOrderCard} id={designInfo.id} />} {/* Покажите OrderCard, если isOrderCardVisible установлен в true */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}