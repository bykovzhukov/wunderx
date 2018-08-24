import React from 'react';
import SVGInline from "react-svg-inline"
import FieldText from 'components/FieldText';
import Svg from 'data/svg';

export default class FieldPassword extends FieldText {

  constructor(props) {
    super(props);

    this.state = {
      type: 'password',
      value: ''
    }

    this.toggleShow = this.toggleShow.bind(this);
    this.clear = this.clear.bind(this);
  }

  toggleShow(e) {
    this.setState({type: this.state.type === 'text' ? 'password' : 'text'});
  }

  clear(e) {
    this.setState({
      active: '',
      value: '',
    });
  }

  render() {
    return (
      <div className={this.state.active ? 'field is-active' : 'field'}>
        <input
          type={this.state.type}
          name={this.props.name}
          value={this.state.value}
          className="field__input field__input--password"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.update}
        />
        <label className="field__label">{this.props.label}</label>
        <div className="field__btns">
          <div className="field__btn" onClick={this.toggleShow}>
            <SVGInline svg={Svg.show} />
          </div>
          <div className="field__btn" onClick={this.clear}>
            <SVGInline svg={Svg.clear} />
          </div>
        </div>
        <div className="field__link">Forgot password</div>
      </div>
    );
  }
}
