import React from 'react';
import './aboutus.css';
import Scroll from 'react-scroll';
import Paper from 'material-ui/Paper';

const Element = Scroll.Element;

class AboutUs extends React.Component {

  render() {
    return (
      <div className="aboutus-component">
        <Element name={`script-${2}`}><div className="wrapper__title-container wrapper__title-container_custom-about-us">О нас</div></Element>
        <p className="aboutus__main_text">Веломастерская ProCrut предлагает быстрый и качественный ремонта Вашего велосипеда.
        У нас вы сможете заказать профессиональное обслуживание и ремонт велосипеда любой сложности.
        Ремонт выполняется только самыми опытными мастерами.
        Наша веломастерская предлагает самый широкий спектр услуг.
        Ремонт любой сложности для нас не проблема! А доступные цены Вас приятно удивят.</p>
        <p className="aboutus__main_text">Обратившись к нам, Вам не нужно будет беспокоиться об неисправности вашего велосипеда – она будет быстро и качественно устранена! Наши мастера работают с любым типом ремонта и с любым производителем.</p>
        <div className="aboutus__list-wrapper">
          <Paper zDepth={2} className="aboutus__left-block">
            <p className="aboutus__block-title">Наши преимущества</p>
            <ul className="aboutus__ul">
              <li className="aboutus__list">Мы предлагаем бесплатную диагностику велосипеда</li>
              <li className="aboutus__list">Быстро определим неисправности</li>
              <li className="aboutus__list">Работаем без выходных в любое удобное для Вас время</li>
              <li className="aboutus__list">Бесплатная консультация</li>
              <li className="aboutus__list">Наши опытные мастера ответят на любые ваши вопросы</li>
            </ul>
          </Paper>
          <Paper zDepth={2} className="aboutus__right-block">
            <p className="aboutus__block-title">Наш критерии просты</p>
            <ul className="aboutus__ul">
              <li className="aboutus__list">Качество</li>
              <li className="aboutus__list">Доступность</li>
              <li className="aboutus__list">Быстрота</li>
              <li className="aboutus__list">Надёжность</li>
              <li className="aboutus__list">Высокий уровень профессионализма</li>
            </ul>
          </Paper>
        </div>
      </div>
    );
  }
}

AboutUs.displayName = 'AboutUs';
AboutUs.propTypes = {};
AboutUs.defaultProps = {};

export default AboutUs;
