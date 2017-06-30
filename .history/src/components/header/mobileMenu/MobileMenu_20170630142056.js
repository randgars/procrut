import React from 'react';
import './mobilemenu.css';
import Scroll from 'react-scroll';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import {ToolbarGroup} from 'material-ui/Toolbar';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import MenuIco from 'material-ui/svg-icons/navigation/menu';
import CloseIco from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const Link = Scroll.Link;

const menuItems = [
  'Наши услуги',
  'О нас',
  'Контакты',
];

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose() {
    this.setState({
      ...this.state,
      open: false,
    });
  }
  render() {
    return (
      <ToolbarGroup firstChild={true} className="header__nav-menu-mobile">
          <div className="header__nav-mobile">
            <IconButton onTouchTap={this.handleTouchTap}>
              { this.state.open && <CloseIco />}
              { !this.state.open && <MenuIco />}
            </IconButton>
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
            >
              <Menu>
                { menuItems.map((item, index) => {
                    return (
                      <Link
                        to={`script-${index + 1}`}
                        isDynamic={true}
                        spy={false}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={this.handleSetActive}
                        onSetInactive={this.handleSetInactive}
                        key={index}
                        className="header__mob-nav-item"
                      >
                        <MenuItem value={index} primaryText={item} />
                      </Link>
                    ) 
                  })
                }
                <Divider />
                <MenuItem primaryText="+375 (29) 66-999-22" />
                <MenuItem primaryText="+375 (29) 55-622-00" />
                <MenuItem primaryText="procrut@yahoo.com" />
                <MenuItem primaryText={<a className="vk-group-item" href="https://vk.com/ClubProCrut">Наша группа ВК</a>}  />
              </Menu>
            </Popover>
          </div>
        </ToolbarGroup>
    );
  }
}

MobileMenu.displayName = 'MobileMenu';
MobileMenu.propTypes = {};
MobileMenu.defaultProps = {};

export default MobileMenu;
