import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => (
    <>
    <button onClick={this.props.previousForm}>Back</button>
    </>
  )
}

export default FormThree;