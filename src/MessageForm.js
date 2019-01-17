import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'Describe yourself here...',
      inputValue: '',
      submitted: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      submitted: prevState.inputValue
    }));
  }

  render() {
    const { inputValue, submitted, placeholder } = this.state;
    return (
      <div>
        Text Area Form
        <form onSubmit={this.handleSubmit}>
          <p> Message: 
            <textarea type="text" rows="5" cols="50" 
              placeholder={placeholder}
              onChange={this.handleChange}
              value={inputValue}
            /> 
          </p>
          <input type="submit" value="Submit" />
        </form>
        {submitted && <p>{submitted}</p>}
      </div>
    );
  }
}

export default MessageForm;