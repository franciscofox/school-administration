import React from 'react';
import { buttonStyle } from '../../styles/addStudentButtonStyle';

const Button = ({ children, onClick, type = 'button', style = buttonStyle }) => {
    return (
        <button style={style} type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
