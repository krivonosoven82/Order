import React, { Component } from 'react';
import Empty from './../Empty/Empty';
import Header from './../Header/Header';
import Info from './../Info/Info';
import Dat from './../Dat/Dat';
import Content from './../Content/Content';
import DeadLine from './../DeadLine/DeadLine';
import Footer from './../Footer/Footer';
import './Win.scss';

class Win extends Component {
  render (){
    return(
      <div className="win">
        <Empty />
        <Header />
        <Info />
        <Dat />
        <Content />
        <DeadLine />
        <Footer />
      </div>
    );
  }
}
export default Win;
