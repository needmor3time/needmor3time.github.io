
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
      <div>
        <a href="https://sketch.io/sketchpad-v4.0/" target="_blank" rel="noopener noreferrer">
          <img id="sketchpad" src="images/screenshot.PNG" link="https://sketch.io/sketchpad-v4.0/" width="500" height="300" alt="sketchpad"></img>
        </a>
        <p>This is a screen shot of the tool called <a href="https://sketch.io/sketchpad-v4.0/" target="_blank" rel="noopener noreferrer">Sketchpad</a>.  It is an online tool that will let you draw out your perfect knife.  You can draw a single image or multiple images each displaying a particular aspect of your knife.  This might seem crude, and we understand that you might not be an artist, but take your time, there is no rush.  The more specific you can be on how you imagine the knife in your minds eye, the more like that image Steve can make it.</p>
        <p>Once you are happy with your drawings, do a control-alt-printscreen to take a screenshot.  Then you can paste it into word or some other media.  Then use the upload tool below.</p>
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload</h1>
          <p>File size must be smaller than 3MB in size.</p>
          <input type="file" name="myImage" onChange={this.onChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}

export default File
