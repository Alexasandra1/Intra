import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { DesignCard } from "../../shared/components/DesignCard/DesignCard"
import { Input } from "../../shared/components/Input/Input";
import { Button } from '../../shared/components/Button/Button';
import { Form } from '../../shared/components/Form/Form';
import { ForgotPasswordModal } from '../../shared/components/ForgotPasswordModal/ForgotPasswordModal';

import toast from 'react-hot-toast';

import './DesignsPage.scss'

export function DesignsPage() {
    useEffect(() => {
        async function getDesigns() {


            try {
                // Выполняем GET-запрос к API
                let response = await fetch(`http://localhost:3000/api/GetAllDesign`);

                // Проверяем, успешно ли выполнен запрос
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    // Преобразуем ответ в JSON
                    let designs = await response.json();

                    // Получаем контейнер для дизайнов
                    let container = document.querySelector('.designs_container');

                    // Очищаем контейнер
                    container.innerHTML = '';

                    let designCards = designs.map(async (design) => {
                        // Получаем данные дизайнера
                        let designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${design.id}`);
                        let designerData = await designerResponse.json();

                        // Получаем фотографии дизайна
                        let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
                        let photoData = await photoResponse.json();

                        // Создаем новый элемент DesignCard и добавляем его в массив
                        return (
                            <DesignCard
                                DesignerName={designerData.name}
                                DesignImage={photoData.photos[0]}
                                DesignName={design.name}
                                DesignPrice={design.price}
                            />
                        );
                    });

                    // Дожидаемся выполнения всех промисов и рендерим все элементы DesignCard
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
            {/* <div className="designsPage__body__container"> */}
                <div className="designs_container"></div>

            {/* </div> */}

            <Footer></Footer>
        </div>
    );
}