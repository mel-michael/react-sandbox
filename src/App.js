import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import NameForm from './NameForm';
// import MessageForm from './MessageForm';
import SelectTag from './SelectTag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <NameForm /> */}
          {/* <MessageForm /> */}
          <SelectTag />
        </header>
      </div>
    );
  }
}


// class SelectTag extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: 'default',
//       selectedOpt: [],
//       submitted: null
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleMultipleChange = this.handleMultipleChange.bind(this);
//   }

//   handleChange(e) {
//     // console.log('single', e.target.value);
//     this.setState({ inputValue: e.target.value });
//   }

//   handleMultipleChange(e) {
//     // console.log('multiple', e.target.value);
//     let options = e.target.options;
//     let selectedValues = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selectedValues.push(options[i].value);
//       }
//     }

//     this.setState({ selectedOpt: this.state.selectedOpt.concat(selectedValues) });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { inputValue, selectedOpt } = this.state;
//     this.setState({ submitted: `${inputValue}, ${[...selectedOpt]}` })
//   }

//   render() {
//     const { inputValue, submitted, selectedOpt } = this.state;
//     return (
//       <div>
//         Select Tag Form
//         <form onSubmit={this.handleSubmit}>
//           <p> Fvaourite Juice: 
//             <select value={inputValue} onChange={this.handleChange}>
//               <option value="default" disabled>Select one</option>
//               <option value="orange">Orange</option>
//               <option value="coconut">Coconut</option>
//               <option value="apple">Apple</option>
//               <option value="mango">Mango</option>
//             </select>
//           </p>
//           <p> Preferred Language: 
//             <select multiple={true} value={selectedOpt} onChange={this.handleMultipleChange}>
//               <option value="react">React</option>
//               <option value="angular">Angular</option>
//               <option value="ember">Ember</option>
//               <option value="vue">Vue</option>
//             </select>
//           </p>
//           <input type="submit" value="Submit" />
//         </form>
//         {submitted && <p>{submitted}</p>}
//       </div>
//     );
//   }
// }

export default App;
