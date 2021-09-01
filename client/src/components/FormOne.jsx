import React from 'react';

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
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
    this.props.saveState('One', this.state);
    this.props.previousForm();
  }

  nextClick() {
    this.props.saveState('One', this.state);
    this.props.nextForm();
  }

  render = () => {
    const {name, email, password} = this.state;
    return (
      <>
      <h1>Customer Information:</h1>
      <div>Full Name: <input type="text" value={name} name="name" onChange={this.onChange}></input></div>
      <div>Email: <input type="text" value={email} name="email" onChange={this.onChange}></input></div>
      <div>Password: <input type="password" value={password} name="password" onChange={this.onChange}></input></div>
      <button onClick={this.backClick}>Back</button>
      <button onClick={this.nextClick}>Next</button>
      </>
    )
  }
}

export default FormOne;