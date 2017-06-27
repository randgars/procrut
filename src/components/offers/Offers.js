import React from 'react';
import './offers.css';
import EcoOffer from './ecoOffer/EcoOffer';
import FullOffer from './fullOffer/FullOffer';
import SeasonOffer from './seasonOffer/SeasonOffer';

class Offers extends React.Component {

  render() {
    return (
      <div className="offers-component">
        <h3 className="offers-component__title">Комплексное ТО велосипеда</h3>
        <div className="diagnostic-text">
          <p>Диагностика велосипеда <span>БЕСПЛАТНО!</span></p>
          <p>Доставка велосипеда в мастерскую - 5р</p>
        </div>
        <div className="offers-component__wrapper">
          <EcoOffer />
          <SeasonOffer />
          <FullOffer />
        </div>
      </div>
    );
  }
}

Offers.displayName = 'Offers';
Offers.propTypes = {};
Offers.defaultProps = {};

export default Offers;
