
import React from 'react';
import axios from "axios";

class File extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    console.log("this.state.file: ",this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    console.log("formData: ", formData)
    axios.post("/api/file/", formData,config ).then((response) => {
      //this.setState({ imageURL: `http://localhost:3000/${body.file}` });
      console.log("axios upload", response);
    }).catch(
      function (err) {
        console.log("err: ", err);
      }
    );
    /*axios.post("/upload",formData,config)
        .then((response) => {
            alert("The file is successfully uploaded");
        }).catch((error) => {
    });*/
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
    console.log(e.target.files[0]);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" name="myImage" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    )
  }
}

export default File
