import React from 'react';

import './xmas-card.scss';

import Button from '../../shared/Button/Button';

const XMasCard = ({ img, title, description }) => {
  return (
    <div className="xmas-card">
      <div className="xmas-card__img">
        <img src={img} alt={title + ' card'} />
      </div>
      <div className="xmas-card__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button>Sử dụng</Button>
      </div>
    </div>
  );
};

export default XMasCard;
