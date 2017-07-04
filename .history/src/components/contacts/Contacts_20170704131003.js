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
      openMap: false,
      error: null,
      vkWidgetWidth: 350
    }
    this.openMap = this.openMap.bind(this);
    this.closeMap = this.closeMap.bind(this);
    this.getName = this.getName.bind(this);
    this.getPhoneNumber = this.getPhoneNumber.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }
  getName(event, value) {
    this.setState({
      ...this.state,
      nameValue: value
    })
  }
  getPhoneNumber(event, value) {
    this.setState({
      ...this.state,
      phoneNumberValue: value
    })
  }
  sendMail() {
    let name = this.state.nameValue;
    let phoneNumberValue = this.state.phoneNumberValue;
    const config = {
      headers: {'Content-Type': "application/x-www-form-urlencoded"}
    };
    if (isNaN(Number(phoneNumberValue))) {
      this.setState({
        ...this.state,
        error: 'Invalid phone number'
      })
      return null
    } else {
      this.setState({
        ...this.state,
        error: null
      })
    }
    axios.post('feedback.php', 'name=' + name + '&phone=' + phoneNumberValue, config)
    .then(function (response) {
      debugger
      window.console.log(response);
      //document.getElementById(result_id).innerHTML = response;
    })
    .catch(function (error) {
      debugger
      //document.getElementById(result_id).innerHTML = "Возникла ошибка при отправке формы. Попробуйте еще раз";
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
      this.state.vkWidgetWidth = 280;
    }
    VK.Widgets.Group('vk_groups', {mode: 3, width: this.state.vkWidgetWidth}, 148553516);
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
          <p className="contacts__our-info">Мы работаем без выходных! Звоните нам в любой день и время, либо оставляйте заявку и мы вам перезвоним!</p>
          <p className="contacts__our-info">Наша мастерская находится по адресу Г.Минск, ул.Ольшевского, д 20</p>
          <ul className="contacts__contacts-info">
            <li><img className="header__contact-ico" src="../../images/vel.png" alt=""/> +375 (29) 66-999-22</li>
            <li><img className="contacts__contact-ico" src="../../images/mts.png" alt=""/> +375 (29) 55-622-00</li>
            <li>procrut@yahoo.com</li>
            <li></li>
          </ul>
          <div id="vk_groups" className="vk_groups"></div>
          
        </div>
        <Paper zDepth={2} className="feedback__form">
          <p className="feedback__form-title">Оставьте ваш номер телефона и мы вам перезвоним</p>
          <form method="POST" id="feedback-form">
            <TextField
              hintText="Имя"
              floatingLabelText="Имя"
              className="feedback__field"
              onChange={this.getName}
              name="nameFF"
            />
            <TextField
              hintText="Номер телефона"
              floatingLabelText="Номер телефона"
              className="feedback__field"
              onChange={this.getPhoneNumber}
              errorText={this.state.error}
              name="contactFF"
            />
            <RaisedButton primary={true} onTouchTap={this.sendMail} label="Отправить" className="feedback__btn"><input type="submit" className="feedback__submit-btn"/></RaisedButton>
          </form>
        </Paper>
      </div>
    );
  }
}

Contacts.displayName = 'Contacts';
Contacts.propTypes = {};
Contacts.defaultProps = {};

export default Contacts;
