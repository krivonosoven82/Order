import React, { Component } from 'react';
import './Header.scss';
import man_17x17 from '../../assets/images/man_17x17.png';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <div className="w-header">
          <div className="w-h-icon">
            <img src={man_17x17} className="img" alt="icon" />
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
    );
  }
}
export default Header;
