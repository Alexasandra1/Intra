import React, { useState } from "react"
import './Input.scss'


// export function Button() {
export function Input(props) {
    return (
        <div className="input">
            <input
                className={`input__input ${props.styleInput}`}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}  // Добавлено свойство onChange
            />
        </div>
    )
}