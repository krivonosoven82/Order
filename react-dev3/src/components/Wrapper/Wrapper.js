import React, { Component } from 'react';
import Win from './../Win/Win';
import './Wrapper.scss';

class Wrapper extends Component {
  render(){
    return(
      <div className="wrapper">
        <Win />
      </div>
    );
  }
}
export default Wrapper;
