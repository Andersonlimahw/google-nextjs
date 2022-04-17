import React, { InputHTMLAttributes } from 'react';
import {
    InputStyled
} from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input : React.FC<InputProps> = () => {
    return (
        <InputStyled />
    )
}

export default Input;