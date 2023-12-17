import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import toast from 'react-hot-toast';

import './AddDesignPage.scss'

export function AddDesignPage() {
    // const navigate = useNavigate();
    // const [designName, setDesignName] = useState('');
    // const [price, setPrice] = useState('');
    // const [designer, setDesigner] = useState('');
    // const [style, setStyle] = useState('');
    // const [year, setYear] = useState('');
    // const [email, setEmail] = useState('');
    // const [isEmailValid, setIsEmailValid] = useState(true);
    // const [isPhoneValid, setIsPhoneValid] = useState(true);
    // const role_id = 1;

    // const handleRegistration = async () => {
        //     try {
        //         if (name.trim() === "" || login.trim() === "" || password.trim() === "" || city.trim() === "" || phone.trim() === "" || email.trim() === "") {
        //             toast.error('Поля не должны быть пустыми');
        //         }

        //         if (!isEmailValid || !isPhoneValid) {
        //             if (!isEmailValid && !isPhoneValid) {
        //                 toast.error('Неверный формат почты и номера')
        //             }
        //             else if (!isEmailValid) {
        //                 toast.error('Неверный формат почты')
        //             }
        //             else {
        //                 toast.error('Неверный формат номера')
        //             }
        //             return;
        //         }
        //         else {
        //             const response = await fetch('http://localhost:3000/api/PostIntraUser', {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                 },
        //                 body: JSON.stringify({
        //                     role_id,
        //                     name,
        //                     login,
        //                     password,
        //                     city,
        //                     phone,
        //                     email,
        //                 }),
        //             });

        //             if (response.ok) {
        //                 const data = await response.json();
        //                 if (data.message) {
        //                     toast.success(data.message);
        //                 } else {
        //                     toast.error(data.error);
        //                 }
        //                 navigate('/main')
        //             } else {
        //                 const errorData = await response.json();
        //                 toast.error(errorData.error);
        //             }
        //         }
        //     } catch (error) {
        //         console.error('Ошибка при отправке запроса:', error);
        //     }
        // };

        return (
            <div className="addDesignPage__body">
                <Header></Header>

                {/* <div className="addDesignPage__body__formContainer">
                    <div className="addDesignPage__body__formContainer__container">
                        <Form inputs={[
                            { placeholder: '  Design Name', styleInput: 'addDesignPage__body__form__designName', value: designName, onChange: e => setDesignName(e.target.value) },
                            { placeholder: '  Price', styleInput: 'addDesignPage__body__form__price', value: price, onChange: e => setPrice(e.target.value) }
                        ]} />
                        <Form formClass="registrationPage__body__formContainer__secondForm" inputs={[
                            { placeholder: '  Designer', styleInput: 'addDesignPage__body__form__designer', value: designer, onChange: e => setDesigner(e.target.value) },
                            { placeholder: '  Style', styleInput: 'addDesignPage__body__form__style', value: style, onChange: e => setStyle(e.target.value) },
                            { placeholder: '  Year', styleInput: 'addDesignPage__body__form__year', value: style, onChange: e => setYear(e.target.value) }
                        ]} />

                        {/* <Form formClass="registrationPage__body__formContainer__thirdForm" inputs={[
                            { placeholder: '  City', styleInput: 'registrationPage__body__form__city', value: city, onChange: e => setCity(e.target.value) },
                            {
                                placeholder: '  Email',
                                styleInput: 'registrationPage__body__form__email',
                                value: email,
                                onChange: (e) => {
                                    setEmail(e.target.value);
                                    setIsEmailValid(
                                        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)
                                    );
                                },
                                type: 'email',
                            },
                            {
                                placeholder: '  Phone Number',
                                styleInput: 'registrationPage__body__form__number',
                                value: phone,
                                onChange: (e) => {
                                    setPhone(e.target.value);
                                    setIsPhoneValid(/^\+375[0-9]{9}$/.test(e.target.value));
                                },
                                type: 'tel',
                            }
                        ]} /> */}
                    {/* </div> */}
             {/* </div>  */}
                 {/* <Button */}
                {/* //     styleButton="addDesignPage__body__form__button"
                //     wordButton="Save"
                //     type="submit"
                //     onClick={handleRegistration}
                // /> */}
                <Footer></Footer>
            </div>
        );
    }