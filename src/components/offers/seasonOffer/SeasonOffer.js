import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ShowIco from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HideIco from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

class SeasonOffer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayBlock: false
    };
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen() {
    this.setState({
      displayBlock: !this.state.displayBlock
    })
  }
  render() {
    return (
      <Paper className={`offer-container shown-block-${this.state.displayBlock} `} zDepth={2}>
        <Subheader className="offer-container__title">Сезонное</Subheader>
        <Divider/>
        <div className="offer-container__list-wrapper">
          <List>
            <ListItem disabled={true} className="offer-container__item offer-container__item-price" primaryText="55р. за комплекс" />
            <ListItem disabled={true} className="offer-container__item" primaryText="Чистка, смазка и регулировка заднего переключателя" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Чистка, смазка и регулировка переднего переключателя" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Зажатие основных резьбовых соединений (педали, шатуны, руль, вынос, переключатели. манетки и тормозные ручки)" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Чистка и регулировка тормозов" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Переборка вилки" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Переборка втулок колес" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Смазка цепи" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Накачка колес, вилки, заднего амортизатора" />
          </List>
        </div>
        {
          !this.state.displayBlock && <div className="offer-container__bottom-shadow"></div>
        }
        <FloatingActionButton mini={true} className="offer-container__btn" onTouchTap={this.handleOpen}>
          { !this.state.displayBlock ? <ShowIco /> : <HideIco />}
        </FloatingActionButton>
      </Paper>
    );
  }
}

SeasonOffer.displayName = 'SeasonOffer';
SeasonOffer.propTypes = {};
SeasonOffer.defaultProps = {};

export default SeasonOffer;
