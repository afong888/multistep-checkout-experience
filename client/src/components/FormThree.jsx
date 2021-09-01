import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcard: undefined,
      expiryDate: '',
      cvv: undefined,
      billingZipcode: undefined,
    }
    this.onChange = this.onChange.bind(this);
    this.backClick = this.backClick.bind(this);
    this.submitClick = this.submitClick.bind(this);
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
    this.props.saveState('Three', this.state);
    this.props.previousForm();
  }

  submitClick() {
    this.props.saveState('Three', this.state);
    this.props.submitForm(this.state);
  }

  render = () => {
    const {creditcard, expiryDate, cvv, billingZipcode} = this.state;
    return (
      <>
      <h1>Billing:</h1>
      <div>CreditCard Number: <input type="tel" value={creditcard} name="creditcard" onChange={this.onChange}></input></div>
      <div>Expiration Date: <input type="month" min="2021-09" value={expiryDate} name="expiryDate" onChange={this.onChange}></input></div>
      <div>CVV: <input type="tel" value={cvv} name="cvv" onChange={this.onChange}></input></div>
      <div>Billing Zip Code: <input type="tel" value={billingZipcode} name="billingZipcode" onChange={this.onChange}></input></div>
      <button onClick={this.backClick}>Back</button>
      <button onClick={this.submitClick}> Submit </button>
      </>
    )
  }
}

export default FormThree;