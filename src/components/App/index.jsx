import React, { Component } from 'react';
import SVGInline from "react-svg-inline"
import Header from 'components/Header';
import Footer from 'components/Footer';
import Login from 'components/Login';
import './App.css';
import Svg from 'data/svg';
import benefits from 'data/benefits.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {show: true};

    this.showLogin = this.showLogin.bind(this);
  }

  showLogin() {
    this.setState({show: !this.state.show});
  }

  render() {
    const benefitItems = benefits.map((item, i) => {
      return (
        <div key={i} className="benefits__item">
          <div className="benefit">
            <div className="benefit__icon">
              <SVGInline svg={Svg[item.icon]} />
            </div>
            <div className="benefit__title">{item.title}</div>
            <div className="benefit__text" dangerouslySetInnerHTML={{__html: item.text}}></div>
          </div>
        </div>
      )
    });

    return (
      <React.Fragment>
        <Header showLogin={this.showLogin}/>
        <div className="layout">
          <div className={this.state.show ? 'layout__sidebar' : 'layout__sidebar is-hide'}>
            <Login />
          </div>
          <div className="layout__content">
            <div className="page">
              <h1 className="page__title">WunderX exchange</h1>
              <div className="page__description">
                <p>We’ve combined the best technologies and financial solutions that are used across the top classic and crypto exchanges to create a superior product.</p>
              </div>
              <div className="page__body">
                <div className="benefits">{benefitItems}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}