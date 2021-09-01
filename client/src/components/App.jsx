import React from 'react';
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: 0,
      formOne: {},
      formTwo: {},
      formThree: {},
      temporaryStorage: [],
    }
    this.nextForm = this.nextForm.bind(this);
    this.previousForm = this.previousForm.bind(this);
    this.saveState = this.saveState.bind(this);
    this.submitForm = this.submitForm.bind(this);
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

  saveState (number, object) {
    var form = 'form' + number;
    this.setState ({
      [form]: object,
    })
  }

  submitForm(object) {
    const {formOne, formTwo, temporaryStorage} = this.state;
    var submission = [];
    submission.push(formOne, formTwo, object)
    temporaryStorage.push(submission)
    this.setState ({
      form: 0,
      formOne: {},
      formTwo: {},
      formThree: {},
      temporaryStorage: temporaryStorage,
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
        <FormOne nextForm={this.nextForm} previousForm={this.previousForm} saveState={this.saveState} form={this.state.formOne}/>
        </>
      )
    } else if (this.state.form === 2) {
      return (
        <>
        <FormTwo nextForm={this.nextForm} previousForm={this.previousForm} saveState={this.saveState} form={this.state.formTwo}/>
        </>
      )
    } else if (this.state.form === 3) {
      return (
        <>
        <FormThree submitForm={this.submitForm} previousForm={this.previousForm} saveState={this.saveState} form={this.state.formThree}/>
        </>
      )
    }
  }
}

export default App;