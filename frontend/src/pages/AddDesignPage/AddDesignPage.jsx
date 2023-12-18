import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from '../../shared/components/Header/Header';
import { Footer } from "../../shared/components/Footer/Footer";
import { Form } from "../../shared/components/Form/Form";
import { Button } from '../../shared/components/Button/Button';
import toast from 'react-hot-toast';

import './AddDesignPage.scss'

export function AddDesignPage() {
    const navigate = useNavigate();
    const [name, setDesignName] = useState('');
    const [price, setPrice] = useState('');
    const [designer, setDesigner] = useState('');
    const [consultant_id, setConsultant] = useState('');
    const [style_id, setStyle] = useState('');
    const [room_id, setRoom] = useState('');
    const [year, setYear] = useState('');
    const [photo_id, setPhoto] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);

    const handleStyleChange = (event) => {
        setStyle(event.target.value);
      };
    
      const handleRoomChange = (event) => {
        setRoom(event.target.value);
      };

    let designer_id = localStorage.getItem('id');


    const handleUpload = async () => {
            try {
                if (name.trim() === "" || price.trim() === "" ||year.trim() === "" || style_id.trim()===""||room_id.trim()==="") {
                    toast.error('Поля не должны быть пустыми');
                }

                // const photoData = new FormData();
                // photoData.append('photo', new Blob([''], { type: 'image/png' }));
            
                // fetch('http://localhost:3000/api/PostDesignPhoto', {
                //   method: 'POST',
                //   body: photoData
                // })
                // .then(response => response.json())
                // .then(data => {
                //   setPhoto(data.id);
                // })
                // .catch(error => console.error('There was an error!', error));

                fetch('http://localhost:3000/api/GetAllConsultant')
                .then(response => response.json())
                .then(data => {
                    const consultants = data;
                    if (consultants && consultants.length > 0) {
                        const randomConsultant = consultants[Math.floor(Math.random() * consultants.length)];
                        setConsultant(randomConsultant.id);
                    } else {
                    console.error('No consultants available');
                    }
                })

                    const response = await fetch('http://localhost:3000/api/PostDesign', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name,
                            designer_id,
                            year,
                            style_id,//style_id
                            price,
                            photo_id: 1,//photo_id
                            consultant_id,//consultant_id
                            room_id,//room_id
                        }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        // if (data.message) {
                            toast.success("данные успешно добавились",data.message);
                        // } else {
                        //     toast.error("dddddd",data.error);
                        // }
                        navigate('/design')
                    } else {
                        const errorData = await response.json();
                        toast.error("ffffff",errorData.error);
                    }
                
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        };

        return (
            <div className="addDesignPage__body">
                <Header></Header>

                <div className="addDesignPage__body__formContainer">
                    <div className="addDesignPage__body__formContainer__container">
                        <Form formClass="addDesignPage__body__formContainer__container__firstForm" inputs={[
                            { placeholder: '  Design Name', styleInput: 'addDesignPage__body__form__designName', value: name, onChange: e => setDesignName(e.target.value) },
                            { placeholder: '  Price', styleInput: 'addDesignPage__body__form__price', value: price, onChange: e => setPrice(e.target.value) }
                        ]} />
                        <Form formClass="addDesignPage__body__formContainer__secondForm" inputs={[
                            // { placeholder: '  Style', styleInput: 'addDesignPage__body__form__style', value: style, onChange: e => setStyle(e.target.value) },
                            { placeholder: '  Year', styleInput: 'addDesignPage__body__form__year', value: year, onChange: e => setYear(e.target.value) }
                        ]} />
                        <select value={style_id} onChange={handleStyleChange}>
                            <option value=''>Select style</option>
                            <option value='1'>Modern</option>
                            <option value='2'>Minimalism</option>
                        </select>

                        <select value={room_id} onChange={handleRoomChange}>
                            <option value=''>Select room type</option>
                            <option value='1'>Kichen</option>
                            {/* <option value='3'>Fl</option>
                            <option value='4'>Cottage</option> */}
                        </select>
                        
                    </div>
              </div> 
                 <Button
                     styleButton="addDesignPage__body__form__button"
                    wordButton="Save"
                    type="submit"
                    onClick={handleUpload}
                />
                <Footer></Footer>
            </div>
        );
    }