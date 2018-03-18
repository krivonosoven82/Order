import React, { Component } from 'react';
import './Footer.scss';
import phone from '../../assets/images/phone.png';
import mail from '../../assets/images/mail.png';
import twitter from '../../assets/images/twitter.svg';
import facebook from '../../assets/images/facebook.svg';

class Footer extends Component {
  render(){
    return(
      <div className="footer">
        <div className="w-footer">
          <div className="w-f-item w-f-item--left">
            <p className="f-i-title bold">Контакты:</p>
            <div className="f-i-contact">
              <div className="i-t-phone">
                <img className="img" src={phone} alt="phone" />
              </div>
              <a className="w-f-link" to="#">0 800 211 221</a>
            </div>
            <div className="f-i-contact">
              <div className="i-t-mail">
                <img className="img" src={mail} alt="mail" />
              </div>
              <a className="w-f-link" to="#">{"info@allinbox.com.ua"}</a>
            </div>
          </div>
          <div className="w-f-item w-f-item--center">
            <button className="f-i-btn bold">Заказать звонок</button>
            <div className="f-i-group">
              <a className="f-i-social f-i-social--twitter" to="#">
                <img className="img" src={twitter} alt="twitter" />
              </a>
              <a className="f-i-social f-i-social--facebook" to="#">
                <img className="img facebook" src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
          <div className="w-f-item w-f-item--right">
            <p className="f-i-title bold">Инфо:</p>
            <a className="w-f-link" to="#">Условия овердрафта</a>
            <a className="w-f-link" to="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
