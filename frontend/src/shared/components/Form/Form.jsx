import React from 'react';
import { Input } from '../Input/Input';
import './Form.scss';

    export function Form({ inputs, formClass = "form"}) {
        // export function Form({ inputs}, props) {
    return (
        <form className={formClass}>
            {inputs.map((inputProps, index) => (
                <Input key={index} {...inputProps} />
            ))}
        </form>
    );
}
