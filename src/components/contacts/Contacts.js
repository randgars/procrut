import React from 'react';
import './contacts.css';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMap: false
    }
    this.openMap = this.openMap.bind(this);
    this.closeMap = this.closeMap.bind(this);
  }
  openMap() {
    this.setState({
      openMap: true
    })
  }
  closeMap() {
    this.setState({
      openMap: false
    })
  }
  render() {
    const actions = [
      <RaisedButton
        label="Закрыть карту"
        primary={true}
        onTouchTap={this.closeMap}
      />
    ];
    return (
      <div className="contacts-component">
        <div className="contacts__map-container">
          <RaisedButton primary={true} label="Показать на карте" onTouchTap={this.openMap} className="contacts__map-btn"/>
          {
            this.state.openMap &&
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.openMap}
              onRequestClose={this.closeMap}
              contentClassName="contacts__map-dialog-container"
            >
              <div className="contacts__map-dialog">
                <iframe src="https://yandex.by/map-widget/v1/-/CBQVANH40A" width="700" height="350" frameBorder="0"></iframe>
              </div>
            </Dialog>
          }
        </div>
        <Paper zDepth={2} className="feedback__form">
          <p className="feedback__form-title">Оставьте ваш номер телефона и мы вам перезвоним</p>
          <Divider />
          <TextField
            hintText="Имя"
            floatingLabelText="Имя"
            className="feedback__field"
          />
          <TextField
            hintText="Номер телефона"
            floatingLabelText="Номер телефона"
            className="feedback__field"
          />
          <RaisedButton primary={true} label="Отправить" className="feedback__btn"/>
        </Paper>
      </div>
    );
  }
}

Contacts.displayName = 'Contacts';
Contacts.propTypes = {};
Contacts.defaultProps = {};

export default Contacts;
