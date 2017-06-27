import React from 'react';
import './desktopmenu.css';
import Scroll from 'react-scroll';
import MenuItem from 'material-ui/MenuItem';
import {ToolbarGroup} from 'material-ui/Toolbar';

const Link = Scroll.Link;

class DesktopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: -90
    };
    this.handleSetActive = this.handleSetActive.bind(this);
    this.handleSetInactive = this.handleSetInactive.bind(this);
  }
  handleSetActive(test) {
    debugger
  }
  handleSetInactive(test) {
    debugger
  }
  render() {
    return (
      <ToolbarGroup firstChild={true} className="header__nav-menu-desktop">
        <div className="header__nav-desktop">
          <Link
            to={`script-${1}`}
            isDynamic={true}
            spy={false}
            smooth={true}
            offset={this.state.scrollPosition}
            duration={500}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            className="header__nav-item header__nav-item-custom"
          >
            <MenuItem primaryText="Наши услуги" />
          </Link>
          <Link
            to={`script-${2}`}
            isDynamic={true}
            spy={false}
            smooth={true}
            offset={-120}
            duration={500}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            className="header__nav-item header__nav-item-custom"
          >
            <MenuItem primaryText="О нас" />
          </Link>
          <Link
            to={`script-${3}`}
            isDynamic={true}
            spy={false}
            smooth={true}
            offset={this.state.scrollPosition}
            duration={500}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            className="header__nav-item"
          >
            <MenuItem primaryText="Контакты" />
          </Link>
        </div>
      </ToolbarGroup>
    );
  }
}

DesktopMenu.displayName = 'DesktopMenu';
DesktopMenu.propTypes = {};
DesktopMenu.defaultProps = {};

export default DesktopMenu;
