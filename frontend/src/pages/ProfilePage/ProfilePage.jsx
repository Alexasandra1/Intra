import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Button } from '../../shared/components/Button/Button';
import { HeaderText } from '../../shared/components/HeaderText/HeaderText';
import avatar_q from "../../image/avatar.png"
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

    let navigate = useNavigate();

    const [img, setImg] = React.useState(null);
    const [avatar, setAvatar] = React.useState(null);

    let id = localStorage.getItem('id');


    async function navigateAndResetId() {
        localStorage.setItem('id', 0);
        localStorage.setItem('authorization', 0);
        navigate('/main');
    }

    const sendFile = React.useCallback(async () => {
        try {
            const formData = new FormData()

            formData.append('avatar', img);
            // formData.append(`filename`, `${id}.png`);

            await fetch('http://localhost:3000/api/UploadAvatar', {
                method: 'POST',
                headers: {
                    'content-type': 'mulpipart/form-data'
                },
                body: formData

            })
                .then(res => setAvatar(res.data.path))
        } catch (error) { }
    }, [img])

    useEffect(() => {
        async function getDesignsByDesignerId() {

            try {
                let response = await fetch(`http://localhost:3000/api/GetDesignByDesignerID/${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    let designs = await response.json();

                    let container = document.querySelector('.designs_container');

                    container.innerHTML = '';

                    let designCards = designs.map(async (design) => {
                        let designerResponse = await fetch(`http://localhost:3000/api/GetIntraUser/${design.id}`);
                        let designerData = await designerResponse.json();

                        let photoResponse = await fetch(`http://localhost:3000/api/GetDesignPhoto/${design.photo_id}`);
                        let photoData = await photoResponse.json();

                        // Создаем новый элемент DesignCard и добавляем его в массив
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
                        <div className="profilePage__main__container__avatarka__picture">
                            {
                                avatar
                                    ? <img src={avatar} alt="user" className="profilePage__main__container__avatarka__picture__img" />
                                    : <img src={avatar_q} alt="user" className="profilePage__main__container__avatarka__picture__img" />
                            }
                        </div>
                        <input type="file" onChange={e => {
                            setImg(e.target.files[0]);
                        }} />
                        <Button wordButton="kjgkj" onClick={sendFile} />
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
                                <img src={avatar_q} alt="user" className="profilePage__main__container__avatarka__picture__img" />
                                <p className="popupNameStyle">Name: {name}</p>
                                <p className="popupStyle">Phone: {phone}</p>
                                <p className="popupStyle">Email: {email}</p>
                                <p className="popupStyle">City: {city}</p>
                                <Button styleButton="logOutButton" wordButton="log out" onClick={() => navigateAndResetId()}></Button>
                            </div>
                        </Popup>
                        <Button styleButton="addDesignButton" wordButton="Add Design" 
                        // onClick={() => navigateAndResetId()}
                        ></Button>
                    </div>
                    {/* <div className="profilePage__main__container__card">
                        <div className="profilePage__main__container__card__picture"><img src={card} alt="design" className="profilePage__main__container__card__picture__img" /></div>
                    </div> */}
                </div>
            </main>
            <div className="designs_container"></div>
            <Footer></Footer>
        </div>
    )
}