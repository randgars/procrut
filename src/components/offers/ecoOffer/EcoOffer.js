import React from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

class EcoOffer extends React.Component {

  render() {
    return (
      <Paper className="offer-container" zDepth={2}>
        <Subheader className="offer-container__title">Эконом</Subheader>
        <Divider/>
        <div className="offer-container__list-wrapper">
          <List>
            <ListItem disabled={true} className="offer-container__item offer-container__item-price" primaryText="25р. за комплекс" />
            <ListItem disabled={true} className="offer-container__item" primaryText="Регулировка заднего переключателя" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Регулировка переднего переключателя" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Зажатие основных резьбовых соединений (педали, шатуны, руль, вынос, переключатели. манетки и тормозные ручки)" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Регулировка тормозов" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Смазка цепи" />
            <Divider/>
            <ListItem disabled={true} className="offer-container__item" primaryText="Накачка колес, вилки, заднего амортизатора" />
          </List>
        </div>
      </Paper>
    );
  }
}

EcoOffer.displayName = 'EcoOffer';
EcoOffer.propTypes = {};
EcoOffer.defaultProps = {};

export default EcoOffer;
