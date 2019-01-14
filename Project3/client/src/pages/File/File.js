
import React from 'react';
import axios from "axios";

class File extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    console.log("this: ",this.uploadInput.files);

    const file = new Blob([this.uploadInput.files[0]], {type: 'image/jpeg'})
    const data = new FormData();
    data.append('file', file); //this.uploadInput.files[0]);
    //data.append('filename', this.uploadInput.files[0].name);
    console.log("data: ", data.get("file"));
    axios.post("/api/file/", data, { headers: { 'Content-Type': 'multipart/form-data'}}).then((response) => {
        //this.setState({ imageURL: `http://localhost:3000/${body.file}` });
        console.log("axios upload", response);
    }).catch(
        function(err) {
          console.log("err: ", err);
        }
      );
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        {/* <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div> */}
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default File;