import React from 'react';
import './contacts.css';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktop: true,
      mobile: false,
      openMap: false
    }
    this.openMap = this.openMap.bind(this);
    this.closeMap = this.closeMap.bind(this);
    this.getName = this.getName.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
  }
  getName(event, value) {
    this.setState({
      ...this.state,
      nameValue: value
    })
  }
  getPhoneNumber(value) {
    this.setState({
      ...this.state,
      phoneNumberValue: value
    })
  }
  sendMail() {
    let name = this.state.nameValue;
    let phoneNumber = this.state.phoneNumber;
    axios.post('feedback.php', {
      "name": name,
      "phoneNumber": phoneNumber
    })
    .then(function (response) {
      debugger
      window.console.log(response);
    })
    .catch(function (error) {
      debugger
      window.console.log(error);
    });
  }
  componentDidMount() {
    if (window.innerWidth < 950) {
      this.setState({
        ...this.state,
        mobile: true,
        desktop: false
      });
    }

    VK.Widgets.Group('vk_groups', {mode: 3, width: '300'}, 20003922);
  }
  openMap() {
    this.setState({
      ...this.state,
      openMap: true
    })
  }
  closeMap() {
    this.setState({
      ...this.state,
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
        {
          this.state.desktop &&
          <iframe src="https://yandex.by/map-widget/v1/-/CBQVANH40A" width="500" height="350" frameBorder="0"></iframe>
        }
        {
          !this.state.desktop &&
          <RaisedButton primary={true} label="Показать на карте" onTouchTap={this.openMap} className="contacts__map-btn"/>
        }
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
        <div className="contacts__contacts-block">
          <div className="contacts__contacts-info">
            <ul>
              <li>number1</li>
              <li>number2</li>
              <li>mail</li>
              <li>...</li>
            </ul>
          </div>
          <div id="vk_groups"></div>
        </div>
        
        
        <Paper zDepth={2} className="feedback__form">
          <p className="feedback__form-title">Оставьте ваш номер телефона и мы вам перезвоним</p>
          <Divider />
          <TextField
            hintText="Имя"
            floatingLabelText="Имя"
            className="feedback__field"
            onChange={this.getName}
          />
          <TextField
            hintText="Номер телефона"
            floatingLabelText="Номер телефона"
            className="feedback__field"
            onChange={this.getPhoneNumber}
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
