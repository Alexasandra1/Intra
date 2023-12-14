import React, { useNavigate, useState, useEffect } from "react"
import ReactDOM from 'react-dom';
// import { ReactDOM } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { HeaderText } from '../../shared/components/HeaderText/HeaderText';
// import { Button } from '../../shared/components/Button/Button';
import avatar from "../../image/avatar.png"
import card from "../../image/cardPic.png"
import { DesignCard } from "../../shared/components/DesignCard/DesignCard"
import Popup from 'reactjs-popup';
import { Footer } from "../../shared/components/Footer/Footer";
import toast from 'react-hot-toast';
import './ProfilePage.scss'

export function ProfilePage() {
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    let id = localStorage.getItem('id');
    useEffect(() => {
        async function getDesignsByDesignerId() {

            try {
                // Выполняем GET-запрос к API
                let response = await fetch(`http://localhost:3000/api/GetDesignByDesignerID/${id}`);

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

        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/GetIntraUser/${id}`);
                // const response = await fetch(url);
                const data = await response.json();

                if (response.ok) {
                    setName(data.name);
                    setCity(data.city);
                    setPhone(data.phone);
                    setEmail(data.email);
                    setRole(data.role);
                    toast.success('Успешное подключение к аккаунту');
                } else {
                    throw new Error(data.message);
                }
            } catch (error) {
                toast.error(`Ошибкаaaaaaaaaaaaaaaaa: ${error.message}`);
            }
        };

        fetchUserData();
        getDesignsByDesignerId();
    }, []);

    return (
        <div className="body">
            <Header ></Header>
            <main className="profilePage__main">
                <div className="profilePage__main__container">
                    <div className="profilePage__main__container__avatarka">
                        <div className="profilePage__main__container__avatarka__picture"><img src={avatar} alt="user" className="profilePage__main__container__avatarka__picture__img" /></div>
                        <div className="profilePage__main__container__avatarka__text">{name}
                            {/* Michael Snow */}
                        </div>
                    </div>
                    <div className="profilePage__main__container__button">
                        <div className="profilePage__main__container__button__myDesign">My Design</div>
                        {/* <button onClick={togglePopup}>Information</button> */}
                        <Popup trigger={
                            <button> Information </button>}
                        >
                            <div className="popup-content">
                                <img src={avatar} alt="user" className="profilePage__main__container__avatarka__picture__img" />
                                <p className="popupNameStyle">Name: {name}</p>
                                {/* <p className="popupStyle">Role: {role}</p> */}
                                <p className="popupStyle">Phone: {phone}</p>
                                <p className="popupStyle">Email: {email}</p>
                                <p className="popupStyle">City: {city}</p>
                                {/* <HeaderText style="popupNameStyle" word="Michael Snow" />
                                <HeaderText style="popupStyle" word="Role: Designer" />
                                <HeaderText style="popupStyle" word="Phone: +375293222222" />
                                <HeaderText style="popupStyle" word="Email: michael@mail.ru" />
                                <HeaderText style="popupStyle" word="City: London" /> */}
                            </div>
                        </Popup>
                    </div>
                    <div className="profilePage__main__container__card">
                        <div className="profilePage__main__container__card__picture"><img src={card} alt="design" className="profilePage__main__container__card__picture__img" /></div>
                        {/* <div className="mainpage__main__container__card__descroption">Do you want to transform your living space into a beautiful and functional environment? Whether you need to redecorate your home, office, we can help you achieve your vision.</div> */}
                        {/* <Popup trigger=
                            {<button> Click to open popup </button>}
                            position="right center">
                                <HeaderText style="popupStyle" word="popud was opened"/>
                        </Popup> */}
                    </div>
                </div>
            </main>
            <div className="designs_container"></div>
            <Footer></Footer>
        </div>
    )
}