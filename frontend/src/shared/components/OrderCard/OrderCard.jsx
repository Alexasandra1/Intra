import React, { useState } from 'react';
import { Form } from "../Form/Form";
import { Button } from '../Button/Button';
import toast from 'react-hot-toast';

import './OrderCard.scss'

export function OrderCard({ isOpen, onClose,id }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [userData, setUserData] = useState(null);

    const handleClose = () => {
        onClose();
    };
    const design_id = id;

    const orderSend = async () => {
        try {
            if (name.trim() === "" || phone.trim() === "" || email.trim() === "") {
                toast.error('Поля не должны быть пустыми');
            }

            if (!isEmailValid || !isPhoneValid) {
                if (!isEmailValid && !isPhoneValid) {
                    toast.error('Неверный формат почты и номера')
                }
                else if (!isEmailValid) {
                    toast.error('Неверный формат почты')
                }
                else {
                    toast.error('Неверный формат номера')
                }
                return;
            }
            else {
                const response = await fetch('http://localhost:3000/api/PostOrders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        design_id,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.message) {
                        toast.success(data.message);
                    } else {
                        toast.error(data.error);
                    }
                    onClose();
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.error);
                }
            }
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
                            setName(e.target.value);
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
                    onClick={orderSend}
                />
            </div>
            {/* )} */}
        </div>
    );
}
