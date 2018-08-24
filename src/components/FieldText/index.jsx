import React, { Component } from 'react';
import './FieldText.css';

export default class FieldText extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      value: ''
    };

    this.update = this.update.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  update(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleFocus(e) {
    this.setState({active: true});
  }

  handleBlur(e) {
    this.state.value ? this.setState({active: true}) : this.setState({active: false});
  }

  render() {
    return (
      <div className={this.state.active ? 'field is-active' : 'field'}>
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.state.value}
          className="field__input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.update}
        />
        <label className="field__label">{this.props.label}</label>
      </div>
    );
  }
}
