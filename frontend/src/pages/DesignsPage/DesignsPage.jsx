import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { DesignCard } from "../../shared/components/DesignCard/DesignCard"
import { Input } from "../../shared/components/Input/Input";
import { Button } from '../../shared/components/Button/Button';
import { Form } from '../../shared/components/Form/Form';


import toast from 'react-hot-toast';

import './DesignsPage.scss'

export function DesignsPage() {
    let navigate = useNavigate();
    useEffect(() => {
        async function getDesigns() {
            try {
                let response = await fetch(`http://localhost:3000/api/GetAllDesign`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    let designs = await response.json();

                    let container = document.querySelector('.designsPage__designs_container');

                    container.innerHTML = '';

                    let designCards = designs.map(async (design) => {
                        let designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${design.id}`);
                        let designerData = await designerResponse.json();
                    
                        let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
                        let photoData = await photoResponse.json();
                    
                        return (
                            <DesignCard
                                DesignerName={designerData.name}
                                DesignImage={photoData.photos[0]}
                                DesignName={design.name}
                                DesignPrice={design.price}
                                onClick={() => navigate(`/infDesign/${design.id}`)}
                            />
                        );
                    });
                    
                    Promise.all(designCards).then((completedCards) => {
                        ReactDOM.render(completedCards, container);
                    });
                }
            } catch (error) {
                console.error('Ошибка:', error);
            }
        }
        getDesigns();
    }, []);
    return (
        <div className="designsPage__body">
            <Header></Header>
            <div className="designsPage__body__container">
                <div className="designsPage__designs_container"></div>
            </div>
            <Footer></Footer>
        </div>
    );
}
