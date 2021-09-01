import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: 0,
    }
    this.nextForm = this.nextForm.bind(this);
    this.previousForm = this.previousForm.bind(this);
  }

  nextForm = () => {
    this.setState({
      form: this.state.form + 1,
    })
  }
  previousForm = () => {
    this.setState({
      form: this.state.form - 1,
    })
  }

  render() {
    if (this.state.form === 0) {
      return (
        <>
        <button onClick={this.nextForm}>Start Checkout</button>
        </>
      )
    } else if (this.state.form === 1) {
      return (
        <>
        <FormOne nextForm={this.nextForm} previousForm={this.previousForm}/>
        </>
      )
    } else if (this.state.form === 2) {
      return (
        <>
        <FormTwo nextForm={this.nextForm} previousForm={this.previousForm}/>
        </>
      )
    } else if (this.state.form === 3) {
      return (
        <>
        <FormThree previousForm={this.previousForm}/>
        </>
      )
    }
  }
}

export default App;