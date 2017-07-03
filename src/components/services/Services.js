import React from 'react';
import './services.css';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const frameServices = [
  {
    service: 'Замена чашек рулевой колонки',
    price: '5р'
  },
  {
    service: 'Замена подшипника в раме',
    price: '5р'
  },
  {
    service: 'Установка заднего амортизатора',
    price: '5р'
  },
  {
    service: 'Замена съемного дропаута (петуха)',
    price: '2р'
  },
  {
    service: 'Рихтовка съемного дропаута (петуха)',
    price: '5р'
  },
  {
    service: 'Установка рубашек или тросов со скрытой проводкой',
    price: '2р'
  }
];

const forkServices = [
  {
    service: 'Замена вилки',
    price: '6р'
  },
  {
    service: 'Замена конуса на вилке',
    price: '3р'
  },
  {
    service: 'Переборка вилки',
    price: 'от 10р до 40р'
  },
  {
    service: 'Подрезка штока вилки',
    price: '3р'
  }
];

const wheelServices = [
  {
    service: "Накачка колес",
    price: "Бесплатно"
  },
  {
    service: "Сборка колеса",
    price: "10р"
  },
  {
    service: "Ремонт камеры",
    price: "4р"
  },
  {
    service: "Замена покрышки или камеры",
    price: "4р"
  },
  {
    service: "Замена колеса",
    price: "3р"
  },
  {
    service: "Правка колеса (исправление восьмерки, зонта, эллипса)",
    price: "5р"
  },
  {
    service: "Протяжка колеса",
    price: "5р"
  },
  {
    service: "Переборка втулки",
    price: "5р"
  },
];

const pedalService = [
  {
    service: "Демонтаж шатунов",
    price: "3р"
  },
  {
    service: "Демонтаж прикепевших шатунов",
    price: "7р"
  },
  {
    service: "Замена звезды на системе",
    price: "3р"
  },
  {
    service: "Замена шатунов",
    price: "5р"
  },
  {
    service: "Рихтовка звезд системы",
    price: "3р (1 звезда)"
  },
  {
    service: "Демонтаж педалей",
    price: "1р"
  },
  {
    service: "Демонтаж прикпевших педалей",
    price: "3р"
  },
  {
    service: "Замена педалей",
    price: "2р"
  },
  {
    service: "Переборка педалей",
    price: "7р"
  },
  {
    service: "Установка тулклипс",
    price: "4р"
  }
];

const chainService = [
  {
    service: "Регулировка переднего переключателя",
    price: "5р"
  },
  {
    service: "Регулировка заднего переключателя",
    price: "5р"
  },
  {
    service: "Замена заднего переключателя с настройкой",
    price: "7р"
  },
  {
    service: "Замена переднего переключателя с настройкой",
    price: "8р"
  },
  {
    service: "Замена кассеты",
    price: "5р"
  },
  {
    service: "Замена трещотка",
    price: "5р"
  },
  {
    service: "Замена\ремонт цепи",
    price: "2р"
  },
  {
    service: "Подрезка цепи",
    price: "3р"
  }
];

const carriageService = [
  {
    service: "Демонтаж каретки",
    price: "4р"
  },
  {
    service: "Демонтаж прикипевшей каретки",
    price: "13р"
  },
  {
    service: "Замена каретки",
    price: "5р"
  }
];

const brakeService = [
  {
    service: "Настройка тормоза (ОБОДНОЙ)",
    price: "4р"
  },
  {
    service: "Настройка тормоза (ДИСКОВЫЙ)",
    price: "5р"
  },
  {
    service: "Прокачка гидравлического тормоза",
    price: "10р"
  },
  {
    service: "Замена тормозных колодок за сторону",
    price: "3р"
  },
  {
    service: "Рихтовка ротора дискового тормоза за 1 шт ",
    price: "3р"
  },
  {
    service: "Замена тормоза",
    price: "3р"
  },
  {
    service: "Замена гидролинии с прокачкой",
    price: "20р"
  },
  {
    service: "Обслуживание гидравлического тормоза",
    price: "35р"
  }
];

const handlebarService = [
  {
    service: "Замена манеток",
    price: "3р"
  },
  {
    service: "Замена выноса",
    price: "4р"
  },
  {
    service: "Замена руля",
    price: "5р"
  },
  {
    service: "Подрезка руля",
    price: "4р"
  },
  {
    service: "Замена грипс",
    price: "3р"
  },
  {
    service: "Замена рожек",
    price: "3р"
  },
  {
    service: "Замена седла",
    price: "3р"
  },
  {
    service: "Подрезка подсидельного штыря",
    price: "3р"
  },
];

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckboxes: false
    }
  }
  render() {
    return (
      <div className="services-component">
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Тормоза <img className="services__frame-images" src="../../images/brake.png" alt="brake"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
                { brakeService.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Рама <img className="services__frame-images" src="../../images/frame.png" alt="frame"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { frameServices.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Вилка <img className="services__frame-images" src="../../images/fork.png" alt="fork"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { forkServices.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Каретка <img className="services__frame-images" src="../../images/carriage.png" alt="carriage"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { carriageService.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Колесо <img className="services__frame-images" src="../../images/wheel.png" alt="wheel"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { wheelServices.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Руль <img className="services__frame-images" src="../../images/handlebar.jpg" alt="handlebar"/></div>
              <div className="services__title-block">Сидение <img className="services__frame-images" src="../../images/seat.jpg" alt="seat"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { handlebarService.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Шатуны <img className="services__frame-images" src="../../images/rod.jpg" alt="rod"/></div>
              <div className="services__title-block">Педали <img className="services__frame-images" src="../../images/pedal.jpg" alt="pedal"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { pedalService.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
          <Paper zDepth={2} className="services__frame-component">
            <Subheader className="services__frame-title">
              <div className="services__title-block">Переключатели <img className="services__frame-images" src="../../images/gear-selector.jpg" alt="gear selector"/></div>
              <div className="services__title-block">Цепь <img className="services__frame-images" src="../../images/chain.jpg" alt="chain"/></div>
              <div className="services__title-block">Звезды <img className="services__frame-images" src="../../images/gear-wheel.jpg" alt="gear wheel"/></div>
            </Subheader>
            <Table className="services__frame-table" selectable={false}>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} >
                { chainService.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableRowColumn className="service__frame-service">{item.service}</TableRowColumn>
                        <TableRowColumn className="service__frame-price">{item.price}</TableRowColumn>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </Paper>
      </div>
    );
  }
}

Services.displayName = 'Services';
Services.propTypes = {};
Services.defaultProps = {};

export default Services;
