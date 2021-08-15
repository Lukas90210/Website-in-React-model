import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; // primary to pozycja zerowa
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ children, onClick, buttonStyle, buttonSize, type }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) //jeśli podam buttonStyle to będzie taki jaki napisałem, a jeśli nie to pojawi sięautomatycznie pierwsza pozycja.
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)  
    ? buttonSize 
    : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}    
            >
                {children}
            </button>
        </Link>
    )
};