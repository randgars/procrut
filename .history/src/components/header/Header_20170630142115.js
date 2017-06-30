import React from 'react';
import './header.css';
import MobileMenu from './mobileMenu/MobileMenu';
import DesktopMenu from './desktopMenu/DesktopMenu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import PhoneIco from 'material-ui/svg-icons/communication/phone';
import Divider from 'material-ui/Divider';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true,
      mobile: false,
      displayNumber: false,
    };
    this.openNumber = this.openNumber.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth < 950) {
      this.setState({
        ...this.state,
        mobile: true,
        desktop: false
      });
    }
  }
  openNumber() {
    event.preventDefault();
    this.setState({
      ...this.state,
      displayNumber: !this.state.displayNumber
    });
  }
  render() {
    return (
      <Toolbar className="header" >
        <ToolbarGroup>
           
            <Link
              to={`script-${0}`}
              isDynamic={true}
              spy={false}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
              onSetInactive={this.handleSetInactive}
              className="header__nav-item header__nav-item-custom"
            >
              <img className="header__logo" src="../../images/logo.png" alt="logo"/>
            </Link>
          <div className="header__logo-wrapper">
          </div>
        </ToolbarGroup>
        {
          this.state.desktop &&
          <DesktopMenu />
        }
        {
          this.state.mobile &&
          <MobileMenu />
        }        
        <ToolbarGroup>
          {
            this.state.desktop &&
            <span className="header__contact">+375 (29) 66-999-22</span>
          }
          {
            this.state.displayNumber &&
            <ul className="header__contact header__contact_custom">
              <li>+375 (29) 55-622-00</li>
              <hr className="divider divider__list-item"/>
              <li>procrut@yahoo.com)</li>
              <hr className="divider divider__list-item"/>
              <li><a className="vk-group-item" href="https://vk.com/ClubProCrut">Наша группа ВК</a></li>
            </ul>
          }
          {
            this.state.desktop &&
            <IconButton onTouchTap={this.openNumber}>
              <PhoneIco className="header__phone-ico"/>
            </IconButton>
          }
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

Header.displayName = 'Header';
Header.propTypes = {};
Header.defaultProps = {};

export default Header;
