import React, { Component } from "react";
//import TextArea from "./Form/TextArea";
class Question extends Component {
    state = {
        answer:""
    }
    updateAnswer = event => {
        console.log("answer state", this.state.answer);
        this.props.changeProp({
            answer: this.state.answer,
            id: this.state.id

        }); //where do I reset the text box between questions?
    }
    updateState = event => {
        this.setState({
            answer: event.target.value,
            id: event.target.id
        }); //where do I reset the text box between questions?
    }
render() {
    return (<div>
                <h1>Question #{this.props.id}</h1>
                <h1>{this.props.text}</h1>
                <textarea className="form-control" rows="5" name="answer" id={this.props.id} onChange={this.updateState}></textarea>
                <button onClick={this.updateAnswer}>Save</button>
                <h2>Explanation: {this.props.explanation}</h2>
                <img src={this.props.image1} alt="knife1" height="250" width="250"/>
                <h3>{this.props.imgdesc1}</h3>
                <img src={this.props.image2} alt="knife2" height="350" width="350"/>
                <h3>{this.props.imgdesc2}</h3>
                {this.props.children}
            </div>);
   } 
}

export default Question
