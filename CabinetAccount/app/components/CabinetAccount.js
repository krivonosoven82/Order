
import React, {Component} from 'react'
import ReactDOM from'react-dom';

class CabinetAccount extends Component{
    render() {
        return (
          <div className="wrap">
            <div className="window">



              <div className="section section--light">
                <div className="w-header container container--header">
                  <div className="w-h-icon">
                    <img src="assets/images/man_17x17.png" className="img" alt="icon" />
                  </div>
                  <div className="w-h-address">
                    <p className="h-a-item">
                      <span className="w-h-address bold">
                        Сеть ресторанов &ldquo;Макароны с хлебом&rdquo;
                      </span>
                    </p>
                    <p className="h-a-item">
                      г.Днепр, ул. Высоцкого
                     <span className="w-h-address bold">58</span>, кв.
                     <span className="w-h-address bold">33</span>
                    </p>
                  </div>
                </div>
              </div>



              <div className="section section--dark">
                <div className="w-balance container">
                  <div className="w-b-item">
                    <div className="b-i-icon">
                      <i className="fa fa-question" aria-hidden="true"></i>
                    </div>
                    <p className="b-i-text">
                      Ваш баланс:
                      <span className="b-i-price bold bold--red">
                        -200</span><span className="b-i-text b-i-text--red">
                         грн
                        </span>
                    </p>
                  </div>
                  <div className="w-b-item">
                    <div className="b-i-icon">
                      <i className="fa fa-question" aria-hidden="true"></i>
                    </div>
                    <p className="b-i-text">
                      Бесплатный овердрафт:
                      <span className="b-i-price bold bold--blue">
                        1400.</span><span className="b-i-text b-i-text--blue">
                        00 грн
                      </span>
                    </p>
                  </div>
                  <div className="w-b-item">
                    <div className="b-i-icon">
                      <span className="fa fa-question" aria-hidden="true"></span>
                    </div>
                    <p className="b-i-text">
                      Вам доступно всего:
                      <span className="b-i-price bold bold--green">
                        1200.</span><span className="b-i-text b-i-text--green">
                        00 грн
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="section section--dark">
                <div className="w-history container">
                  <p className="w-h-title bold">История платежей</p>
                </div>
              </div>



              <div className="section section--dark">
                <div className="w-content container">
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата за доставку #5310
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--red">
                        <span className=" c-i-text c-i-text--red bold">-200.</span>00 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price c-i-text--green">
                        <span className="c-i-text c-i-text--green bold">+10.</span>55 грн
                      </p>
                      <p className="c-i-text c-i-text--padLeft c-i-text--description">
                        Проценты для &ldquo;агента&rdquo;
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">52.</span>65 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата за доставку #5310
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">40.</span>10 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата кредитной картой курьеру
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">303.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price c-i-text--green">
                        <span className="c-i-text c-i-text--green bold">+263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Остаток наличными с доставки ...
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">303.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата за доставку #5310
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--red">
                        <span className=" c-i-text c-i-text--red bold">-200.</span>00 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price c-i-text--green">
                        <span className="c-i-text c-i-text--green bold">+10.</span>55 грн
                      </p>
                      <p className="c-i-text c-i-text--padLeft c-i-text--description">
                        Проценты для &ldquo;агента&rdquo;
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">52.</span>65 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата за доставку #5310
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">40.</span>10 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price">
                        <span className="c-i-text bold">-263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Оплата кредитной картой курьеру
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">303.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                  <div className="w-c-info">
                    <div className="c-i-item c-i-item--left">
                      <p className="c-i-text c-i-text--date">18-12-2017</p>
                      <p className="c-i-text c-i-text--price c-i-text--green">
                        <span className="c-i-text c-i-text--green bold">+263.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--description">
                        Остаток наличными с доставки ...
                      </p>
                    </div>
                    <div className="c-i-item">
                      <p className="c-i-text c-i-text--balance c-i-text--green">
                        <span className=" c-i-text c-i-text--green bold">303.</span>20 грн
                      </p>
                      <p className="c-i-text c-i-text--checked">
                        <span className="fa fa-chevron-down" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              <div className="section">
                <div className="w-deadline container container--deadline">
                  <div className="w-d-left">
                    <p className="d-l-title">До погашения овердрафта в сумме:</p>
                    <div className="d-l-item">
                      <span className="l-i-text l-i-text--green bold">200.00 грн</span>
                      <span className="l-i-text l-i-text--gray">осталось</span>
                      <span className="l-i-text l-i-text--red bold">4 дня</span>
                      <div className="b-i-icon deadline">
                        <i className="fa fa-question" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-d-right">
                    <p className="d-r-text">Все детали вы можете уточнить у персонального
                      менеджера либо по номеру бесплатной горячей линии
                      <span className="r-t-gray">0 800 211 221</span>
                    </p>
                  </div>
                </div>
              </div>



              <div className="section section--footer">
                <div className="w-footer container">
                  <div className="w-f-item w-f-item--left">
                    <p className="f-i-title bold">Контакты:</p>
                    <div className="f-i-contact">
                      <div className="i-t-phone">
                        <img className="img" src="assets/images/phonee.png" alt="phone" />
                      </div>
                      <a className="w-f-link" href="#">0 800 211 221</a>
                    </div>
                    <div className="f-i-contact">
                      <div className="i-t-mail">
                        <img className="img" src="assets/images/mail.png" alt="mail" />
                      </div>
                      <a className="w-f-link" href="#">{'info@allinbox.com.ua'}</a>
                    </div>
                  </div>
                  <div className="w-f-item w-f-item--center">
                    <button className="f-i-btn bold">Заказать звонок</button>
                    <div className="f-i-group">
                      <a className="f-i-social f-i-social--twitter" href="#">
                        <img className="img" src="assets/images/Twitter_Bird-01.svg" alt="twitter" />
                      </a>
                      <a className="f-i-social f-i-social--facebook" href="#">
                        <img className="img facebook" src="assets/images/facebook.svg" alt="facebook" />
                      </a>
                    </div>
                  </div>
                  <div className="w-f-item w-f-item--right">
                    <p className="f-i-title bold">Инфо:</p>
                    <a className="w-f-link" href="#">Условия овердрафта</a>
                    <a className="w-f-link" href="#">Политика конфиденциальности</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

export default CabinetAccount;
