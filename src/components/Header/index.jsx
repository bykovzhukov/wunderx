import React, { Component } from 'react';
import SVGInline from "react-svg-inline"
import Svg from 'data/svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <div className="header__logo">
            <SVGInline svg={Svg.logo} />
          </div>
          <nav className="header__menu">
            <div className="menu">
              <a href="#" className="menu__link">Trading</a>
              <a href="#" className="menu__link">Documentation</a>
              <a href="#" className="menu__link">API</a>
            </div>
          </nav>
          <div className="header__btn" onClick={this.props.showLogin}>Log in</div>
        </div>
      </header>
    );
  }
}
