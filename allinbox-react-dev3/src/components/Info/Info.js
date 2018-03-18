import React, { Component } from 'react';
import './Info.scss';
import down from '../../assets/images/down.png';

class Info extends Component {
  render(){
    return(
      <div className="info">
        <div className="w-info">
          <div className="w-in-item">
            <div className="in-i-icon">
              <img src={down} alt="" className="img" />
            </div>
            <p className="in-i-text bold">
              Выберите какие документы Вас интересуют, период и нажмите &ldquo;Показать&rdquo;
            </p>
          </div>
          <div className="w-in-item item-link">
            <a className="in-i-link link-desktop" to="#">договор поставки</a>
            <button id="toggle-menu" className="in-i-btn">
              накладные
              <i className="fa fa-caret-down"></i>
            </button>
            <a className="in-i-link link-desktop" to="#">счета</a>
            <a className="in-i-link link-desktop" to="#">акты сверки</a>
            <button className="in-btn-mob btn-mobail">
              <i className="fa fa-search"></i>
              показать
            </button>
            <div id="mobail-menu" className="in-i-mobail">
              <a className="in-i-link link-mobail" to="#">договор поставки</a>
              <a className="in-i-link link-mobail" to="#">счета</a>
              <a className="in-i-link link-mobail" to="#">акты сверки</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
