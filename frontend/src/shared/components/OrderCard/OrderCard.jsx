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
    const [userData, setUserData] = useState(null);

    const handleClose = () => {
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
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <div className="order">
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
                        placeholder: '  Email',
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
