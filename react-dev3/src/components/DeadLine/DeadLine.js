import React, { Component } from 'react';
import './DeadLine.scss';

class DeadLine extends Component {
  render(){
    return(
      <div className="deadline">
        <div className="w-deadline">
          <div className="w-d-left">
            <p className="d-l-title">До погашения овердрафта в сумме:</p>
            <div className="d-l-item">
              <span className="l-i-text l-i-text--green bold">200.00 грн</span>
              <span className="l-i-text l-i-text--gray">осталось</span>
              <span className="l-i-text l-i-text--red bold">4 дня</span>
              <div className="d-i-icon d-i-deadline">
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
    );
  }
}
export default DeadLine;
