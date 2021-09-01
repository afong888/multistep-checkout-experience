import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => (
    <>
    <button onClick={this.props.previousForm}>Back</button>
    <button onClick={this.props.nextForm}>Next</button>
    </>
  )
}

export default FormTwo;