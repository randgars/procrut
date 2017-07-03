import React from 'react';
import './offers.css';
import EcoOffer from './ecoOffer/EcoOffer';
import FullOffer from './fullOffer/FullOffer';
import SeasonOffer from './seasonOffer/SeasonOffer';

class Offers extends React.Component {

  render() {
    return (
      <div className="offers-component">
        <h1 className="offers-component__title">Комплексное ТО велосипеда</h1>
        <div className="diagnostic-text">
          <h2>Диагностика велосипеда <span>БЕСПЛАТНО!</span></h2>
          <h2>Доставка велосипеда в мастерскую - 5р</h2>
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
