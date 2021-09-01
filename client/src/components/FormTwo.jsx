import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipcode: undefined,
    }
    this.onChange = this.onChange.bind(this);
    this.backClick = this.backClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.form)
  }

  onChange(event) {
    var category = event.target.name;
    this.setState({
      [category]: event.target.value,
    })
  }

  backClick() {
    this.props.saveState('Two', this.state);
    this.props.previousForm();
  }

  nextClick() {
    this.props.saveState('Two', this.state);
    this.props.nextForm();
  }

  render = () => {
    const {addressOne, addressTwo, city, state, zipcode} = this.state;
    return (
      <>
      <div> <h1>Address:</h1>
        <div>Line 1: <input type="text" value={addressOne} name="addressOne" onChange={this.onChange}></input></div>
        <div>Line 2: <input type="text" value={addressTwo} name="addressTwo" onChange={this.onChange}></input></div>
      </div>
      <div>City: <input type="text" value={city} name="city" onChange={this.onChange}></input></div>
      <div>State: <input type="text" value={state} name="state" onChange={this.onChange}></input></div>
      <div>Zip Code: <input type="tel" value={zipcode} name="zipcode" onChange={this.onChange}></input></div>
      <button onClick={this.backClick}>Back</button>
      <button onClick={this.nextClick}>Next</button>
      </>
    )
  }
}

export default FormTwo;