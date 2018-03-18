import React, { Component } from 'react';
import './Dat.scss';
import inputDate from '../../assets/images/inputDate.png';

class Dat extends Component {
  render(){
    return(
      <div className="date">
        <div className="w-date">
          <div className="w-d-item">
            <span className="d-it-wrap">
              <span className="it-w-text text-desktop">Период с</span>
              <span className="it-w-text text-mobile">С</span>
              <label className="it-w-label">
                <input className="it-w-input" type="text" />
                <span className="it-w-date"></span>
                <img className="down" src={inputDate} alt="" />
              </label>
              <span className="it-w-text">по</span>
              <label className="it-w-label">
                <input className="it-w-input" type="text" />
                <span className="it-w-date"></span>
                <img className="down" src={inputDate} alt="" />
              </label>
            </span>
            <button className="d-i-btn btn-desktop">
              <i className="fa fa-search"></i>
              показать
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Dat;
