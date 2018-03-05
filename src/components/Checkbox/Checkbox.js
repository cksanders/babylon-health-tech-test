import React, {Component} from 'react';
import './Checkbox.css';
import checkboxCheckedImg from './images/icons-checked-checkbox.png'
import checkboxUncheckedImg from './images/icons-unchecked-checkbox.png'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isChecked : false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isChecked : !prevState.isChecked
    }));
  }
  
  render() {
    const {label} = this.props;
    const {isChecked} = this.state;
    
    return (
      <div className={'checkbox'}>
        <img
          alt={`checkbox ${label}`}
          src={isChecked ? checkboxCheckedImg : checkboxUncheckedImg}
          onClick={this.handleClick}
        />
        <label>{label}</label>
      </div>
    );
  }
}

export default Checkbox;


