import React from 'react';

import './button.scss';
import clsx from 'clsx';

const Button = ({ type = 'primary', outline, disabled, children, onClick }) => {
  return (
    <button className={clsx('button', type, outline && 'outline', disabled && 'disabled')} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
