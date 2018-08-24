import React, { Component } from 'react';
import FieldText from 'components/FieldText';
import FieldPassword from 'components/FieldPassword';
import Button from 'components/Button';
import './Login.css';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: true,
      register: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      login: !this.state.login,
      register: !this.state.register
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = e.target,
          url = form.action,
          data = new FormData(form);

    console.log(url);
    for (var entry of data.entries()) {
      console.log(entry[0], entry[1]);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.login ? 'login' : 'login is-hide'}>
          <div className="login__inner">
            <div className="login__header">
              <div className="login__title">Log in</div>
              <div className="login__switch">or <span onClick={this.toggle}>Register</span></div>
            </div>
            <form action="/login" className="login__form" onSubmit={this.handleSubmit}>
              <div className="login__field">
                <FieldText
                  type="email" name="email" label="Email" />
              </div>
              <div className="login__field">
                <FieldPassword name="password" label="Password" />
              </div>
              <div className="login__submit">
                <Button type="submit" label="Log in" />
              </div>
            </form>
          </div>
        </div>
        <div className={this.state.register ? 'login' : 'login is-hide'}>
          <div className="login__inner">
            <div className="login__header">
              <div className="login__title">Register</div>
              <div className="login__switch">or <span onClick={this.toggle}>Log in</span></div>
            </div>
            <form action="/register" className="login__form" onSubmit={this.handleSubmit}>
              <div className="login__field">
                <FieldText type="email" name="email" label="Email" />
              </div>
              <div className="login__field">
                <FieldText type="password" name="password" label="Password" />
              </div>
              <div className="login__field">
                <FieldText type="password" name="password_confirm" label="Password confirm" />
              </div>
              <div className="login__field">
                <FieldText type="text" name="name" label="Name" />
              </div>
              <div className="login__field">
                <FieldText type="text" name="surname" label="Surname" />
              </div>
              <div className="login__submit">
                <Button type="submit" label="Register" />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
