import React, { Component } from 'react';
import axios from 'axios';

class UploadNames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
  }

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleUpload = async () => {
    try {
      const { file } = this.state;

      if (!file) {
        console.error('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:8000/api/std/v1/upload-names/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Names uploaded successfully!');
    } catch (error) {
      console.error('Error uploading names:', error);
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>Upload Names</button>
      </div>
    );
  }
}

export default UploadNames;
