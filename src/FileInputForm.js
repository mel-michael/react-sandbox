import React, { Component } from 'react';

class FileInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: null
    }
    this.singleFileInput = React.createRef();
    this.multipleFileInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile() {
    console.log('>>', this.singleFileInput.current.files)
  }

  handleSubmit(e) {
    e.preventDefault();
    let fileNames = `${this.singleFileInput.current.files[0].name}`;
    const multipleFiles = this.multipleFileInput.current.files;
    Object.keys(multipleFiles).forEach(file => {
      fileNames += `, ${multipleFiles[file].name}`;
    });
    this.setState({ submitted: fileNames })
  }

  render() {
    const { submitted } = this.state;
    return (
      <div>
        File Input Tag
        <form onSubmit={this.handleSubmit}>
          <p> Select One File: 
            <input type="file"  ref={this.singleFileInput} onChange={this.handleFile} />
          </p>
          <p> Select Multiple File: 
            <input type="file" multiple ref={this.multipleFileInput} />
          </p>
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Submitted file names are:  {submitted}</p>}
      </div>
    );
  }
}

export default FileInputForm;