import React, {Component}  from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const typed ="this is what was typed: ";
    this.setState((prevState) => ({
      submitted: typed + prevState.inputValue
    }));
  }

  render() {
    const { inputValue, submitted } = this.state;
    return (
      <div>
        Name Form
        <form onSubmit={this.handleSubmit}>
          <p> Name: 
            <input type="text" 
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

export default NameForm;
