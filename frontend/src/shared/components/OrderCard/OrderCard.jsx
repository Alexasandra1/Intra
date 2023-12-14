import React, { useState } from 'react';
import { Form } from "../Form/Form";
import { Button } from '../Button/Button';
import toast from 'react-hot-toast';

import './OrderCard.scss'

export function OrderCard({ isOpen, onClose }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    // const [isResettingPassword, setIsResettingPassword] = useState(false);
    const [userData, setUserData] = useState(null);

    const handleClose = () => {
        // setIsResettingPassword(false);
        onClose();
    };

    const handlePasswordRecovery = async (e) => {
        console.log(email);
        if (email.trim() === "") {
            toast.error('Поле не должны быть пустыми');
            return
        }
        if (!isEmailValid) {
                toast.error('Неверный формат почты');
                return
        }


        try {
            // const response = await fetch('http://localhost:3000/api/GetUserByEmail', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         email,
            //     }),
            // });

            // if (response.ok) {
            //     const userData = await response.json();
            //     setUserData(userData);
            //     // setIsResettingPassword(true);
            // } else {
            //     const errorData = await response.json();
            //     toast.error(errorData.error);
            // }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    // const resetPassword = async () => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/api/PutIntraUser/${userData.id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 ...userData,
    //                 password,
    //             }),
    //         });

    //         if (response.ok) {
    //             const updatedUser = await response.json();
    //             console.log(updatedUser);
    //             toast.success('Пароль изменен');
    //             // setIsResettingPassword(false);
    //             onClose();
    //         } else {
    //             const errorData = await response.json();
    //             toast.error(errorData.error);
    //         }
    //     } catch (error) {
    //         console.error('Ошибка при отправке запроса:', error);
    //     }
    // };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="order">
            {/* {isResettingPassword ? (
                <div className="order-content">
                    <div className="close-button" onClick={handleClose}>X</div>
                    <h2>Enter your new password</h2>
                    <Form inputs={[
                            { placeholder: '  Password',
                                styleInput: 'forgotPasswordForm__input',
                                value: password,
                                onChange: e => setPassword(e.target.value),
                                type: 'password',
                            }]}/>
                    <Button
                        styleButton="forgotPasswordForm__button"
                        wordButton="Reset password"
                        type="submit"
                        onClick={resetPassword}
                    />
                </div>
            ) : ( */}
            <div className="order-content">
                <div className="close-button" onClick={handleClose}>X</div>
                <h2 className='order-content-intra'>INTRA</h2>
                <Form formClass='orderContentForm' inputs={[
                    {
                        placeholder: '  Name',
                        styleInput: 'orderContentForm__input',
                        value: name,
                        onChange: (e) => {
                            setPhone(e.target.value);
                        }
                        // onChange: (e) => {
                        // setEmail(e.target.value);
                        // setIsEmailValid(
                        //         /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)
                        //     );
                        // },
                        // type: 'email',
                    },
                    {
                        placeholder: '  Phone',
                        styleInput: 'orderContentForm__input',
                        value: phone,
                        onChange: (e) => {
                            setPhone(e.target.value);
                            setIsPhoneValid(/^\+375[0-9]{9}$/.test(e.target.value));
                        },
                        type: 'tel',
                    },
                    {
                        placeholder: '  Name',
                        styleInput: 'orderContentForm__input',
                        value: email,
                        onChange: (e) => {
                            setEmail(e.target.value);
                            setIsEmailValid(
                                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)
                            );
                        },
                        type: 'email',
                    }
                ]} />
                <Button
                    styleButton="orderContent__button"
                    wordButton="Send order"
                    type="submit"
                    onClick={handlePasswordRecovery}
                />
            </div>
            {/* )} */}
        </div>
    );
}
