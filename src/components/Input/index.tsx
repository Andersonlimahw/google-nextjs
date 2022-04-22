import React, { InputHTMLAttributes } from 'react';
import {
    InputStyled,
    IconStyled
} from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input : React.FC<InputProps> = (props: InputProps) => {
    return (
        <>
            <IconStyled />
            <InputStyled {...props}/>
        </>
    )
}

export default Input;