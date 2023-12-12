import React, { useNavigate, useState, useEffect } from "react"
import { Header } from '../../shared/components/Header/Header';
import { HeaderText } from '../../shared/components/HeaderText/HeaderText';
// import { Button } from '../../shared/components/Button/Button';
import avatar from "../../image/avatar.png"
import card from "../../image/cardPic.png"
import Popup from 'reactjs-popup';
import { Footer } from "../../shared/components/Footer/Footer";
import './ProfilePage.scss'
import toast from 'react-hot-toast';

export function ProfilePage() {
    // const [isPopupOpen, setPopupOpen] = useState(false); 
    // const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const id = localStorage.getItem('id');
            // const url = 'http://localhost:3000/api/GetIntraUser/' + id;
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
    }, []);

    // const togglePopup = () => {
    //     setPopupOpen((prevIsPopupOpen) => { НАМНОГО РАНЬШЕ ПРИЧЕМ
    //         const profilePageBody = document.querySelector('.profilePage__body');

    //         if (profilePageBody) {
    //             if (!prevIsPopupOpen) {
    //                 profilePageBody.classList.add('popup-open');
    //             } else {
    //                 profilePageBody.classList.remove('popup-open');
    //             }
    //         }

    //         return !prevIsPopupOpen;
    //     });
    // };    

    return (
        // <div className={`profilePage__body ${isPopupOpen ? "popup-open" : ""}`}>
        <div className="body">
            <Header ></Header>
            {/* <Header onClick={handleAboutUsClick} handleAboutUsClick={handleAboutUsClick()} handleInstructionClick={handleInstructionClick()}></Header> */}
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
                        // trigger={<button onClick={togglePopup}> Information </button>}
                        //   open={isPopupOpen}
                        //   onClose={togglePopup}
                        //   closeOnDocumentClick
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
            <Footer></Footer>
        </div>
    )
}