import React from 'react';
import './app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './header/Header';
// import ImageSlider from './imageSlider/ImageSlider';
import Offers from './offers/Offers';
import Contacts from './contacts/Contacts';
import Services from './services/Services';
import AboutUs from './aboutUs/AboutUs';
import Scroll from 'react-scroll';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink900} from 'material-ui/styles/colors';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink900
  },
});

const Element = Scroll.Element;

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true
    };
  }
  componentDidMount() {
    if (window.innerWidth < 950) {
      this.setState({
        ...this.state,
        desktop: false
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="wrapper">
          <Header/>
          {/*
            this.state.desktop &&
            <div className="wrapper__image-slider">
              <ImageSlider/>
            </div>*/
          }
          <Element name={`script-${0}`}></Element>
          <Offers/>
          <Element name={`script-${1}`}><div className="wrapper__title-container">НАШИ УСЛУГИ</div></Element>
          <hr className="divider"/>
          <Services/>
          <AboutUs/>
          <Element name={`script-${3}`}><div className="wrapper__title-container">Контакты</div></Element>
          <hr className="divider"/>
          <Contacts/>
          <div className="copyright">© 2017 Pro-crut.by</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
