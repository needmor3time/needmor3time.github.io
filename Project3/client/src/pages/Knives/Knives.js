import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { set } from "mongoose";
import Question from "../../components/Question"
//import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";

var questions = [{id:1,
                  question:"purpose",
                  text:"What is the intended purpose of the knife?",
                  explanation:"this is one of the most fundamental yet most important question to ask of a knife.  It will drive materials, temper, size, and shape.  Examples would be, throwing, vegtable knife, chopping, survival, etc.",
                  image1:"../../../images/full_tang.jpg",
                  imgdesc1:"full tang knife with no handle attached",
                  image2:"../../../images/hidden_tang_nohandle.jpg",
                  imgdesc2:"hidden tang knife with no handle attached"
                }, 
                {id:2,
                  question:"steel",
                  text:"Do you know what type of steel(s) you want your knife made from?",
                  explanation:"the type of steel can be based on the intended purpose of the knife.  If you're unsure of this, the 'Let Steve decide button' will give him an opportunity to make some suggestions.",
                  image1:"../../../images/full_tang.jpg",
                  imgdesc1:"full tang knife with no handle attached",
                  image2:"../../../images/hidden_tang_nohandle.jpg",
                  imgdesc2:"hidden tang knife with no handle attached"
                }, 
                {id:3,
                  question:"handleMaterial",
                  text:"Do you know what handle material you want?",
                  explanation:"this also can be dependent on what you want the knife to do.  Some materials are faily brittle, but beautiful.  Meaning they would perform just fine on a chef's vegtable knife, but might crack fairly quickly on a machete or kukri",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:4,
                  question:"tang",
                  text:"Do you know if you want a hidden or full tang?",
                  explanation:"this is usually a matter of asthetics since a well made hidden tang knife can perform just as well as a full tang.  Bearing in mind that due to the hidden tang fully encapsulating the steel in the handle, it will have to be an appropriate sized piece of wood, antler, etc.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:5,
                  question:"guard",
                  text:"Do you want a hand guard?",
                  explanation:"a hand guard can be intregal to the handle shape itself or be more like a spacer that is made of a different material from the blade and handle.  Put in here if you have a preference on material (eg. silver nickel, bronze/brass, steel, etc).",
                  image1:"../../../images/intregral_guard.jpg",
                  imgdesc1:"Intregral guard with full tang",
                  image2:"../../../images/no_guard.jpg",
                  imgdesc2:"No guard with full tang"
                }, 
                {id:6,
                  question:"pommel",
                  text:"Do you want a pommel?",
                  explanation:"a pommel isn't necessary, however can be a functional or an asthetic addtion.  Functionally it could be used as a hammer on a survival knife or asthetically having a matching finish as the hand guard.  Mention here if you want one and if it should match the hand guard.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:7,
                  question:"rivet",
                  text:"Do you have a prefernce on rivets?",
                  explanation:"rivets are the mechanical connection that holds the steel to the handle material.  So this isn't a question of if, more of how many, pattern, and what material.  These can be fairly plain and match the guard/pommel color, or be decorative patterns.",
                  image1:"../../../images/full_tang_finished.jpg",
                  imgdesc1:"Three silver-nickel rivets",
                  image2:"../../../images/no_guard.jpg",
                  imgdesc2:"multipe rivets in custom pattern"
                }, 
                {id:8,
                  question:"lanyard",
                  text:"Do you want a lanyard hole?",
                  explanation:"a lanyard hole is usually at the base of the handle and is completely optional.  However, for something like hunting or chopping, it can make the difference on retention.  Put 'none' if you don't want one.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:9,
                  question:"fileorengrave",
                  text:"Do you want file work or engraving?",
                  explanation:"Engraving and file work are completely asthetic but can really make a knife stand out and highlights that it is a custom made knife.  Put 'none' if you don't want anything.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:10,
                  question:"finish",
                  text:"What type of finish do you want on the blade?",
                  explanation:"this is a matter of taste and asthetics.  Bear in mind that a mirror finish can take much longer to get it right, ergo more money spent making your custom knife.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }, 
                {id:11,
                  question:"special",
                  text:"Special instructions",
                  explanation:"this would be where you'd describe any special features of your custom knife that can't be seen in picture/drawing.  Select 'none' if you don't have any.",
                  image1:"../../../images/deer_antler_handle_hidden_tang.jpg",
                  imgdesc1:"Deer antler handle with a hidden tang",
                  image2:"../../../images/full_tang_finished.jpg",
                  imgdesc2:"full tang knife with synthetic slabs attached"
                }];



class Knives extends Component {
  state = {
    knives: [],
    question: 0
    //answer:"",
  };

  componentDidMount() {
    this.loadKnives();
  }

  loadKnives = () => {
    API.getKnives()
      .then(res => {
        console.log("res.data", res.data);
        this.setState({ knives: res.data })
      })
      .catch(err => console.log(err));
  };
  changeQuestion = () => {
    this.setState({question:this.state.question+1});
    console.log("current question #: ", this.state.question);
  }

  setAnswer = answer => {
    console.log(answer);  //This is showing as undefined
  //  this.setState({
  //    answer: answer
  //  });
  }

  handleInputChange = event => {
    console.log("knife event", event);
    var {id, answer} = event;
    this.setState({[id]:answer});
    console.log("id: ", id);
    console.log("value: ", answer)
  }

  onSubmit = (event) => {
    //event.preventDefault()
    const knifeData = this.state;
    console.log("knifeData: ", knifeData);
    axios.post("/api/knives/", knifeData).then(
      function(data) {
        console.log("data", data);
      }
    ).catch(
      function(err) {
        console.log("err: ", err);
      }
    )
  }

  render() {
    //diplay the splash page first
    console.log("knives length", this.state.knives.length)
    var slide;
    if (this.state.question === 0) {
      slide= (<div>"
        <h1>Dove Knives Custom</h1>
        <button onClick={this.changeQuestion}>Let's get started!</button>
      </div>);
    } else if (this.state.question > 1 && this.state.question < 11){
      slide = <Question changeProp={this.handleInputChange} answer={this.state.answer} setAnswer={this.setAnswer()} text={questions[this.state.question -1].text} image1={questions[this.state.question -1].image1} image2={questions[this.state.question -1].image2} imgdesc1={questions[this.state.question -1].imgdesc1} imgdesc2={questions[this.state.question -1].imgdesc2} explanation={questions[this.state.question -1].explanation} id={questions[this.state.question - 1].id}> 
                <button onClick={this.changeQuestion}>Let Steve decide</button>
                <button onClick={this.changeQuestion}>Next Question</button>
              </Question>;
    } else if (this.state.question === 1){
      slide = <Question changeProp={this.handleInputChange} answer={this.state.answer} setAnswer={this.setAnswer()} text={questions[this.state.question -1].text} image1={questions[this.state.question -1].image1} image2={questions[this.state.question -1].image2} imgdesc1={questions[this.state.question -1].imgdesc1} imgdesc2={questions[this.state.question -1].imgdesc2} explanation={questions[this.state.question -1].explanation} id={questions[this.state.question - 1].id}> 
                <button onClick={this.changeQuestion}>Next Question</button>
              </Question>;
    } else if (this.state.question === 11){
      slide = <Question changeProp={this.handleInputChange} answer={this.state.answer} setAnswer={this.setAnswer()} text={questions[this.state.question -1].text} image1={questions[this.state.question -1].image1} image2={questions[this.state.question -1].image2} imgdesc1={questions[this.state.question -1].imgdesc1} imgdesc2={questions[this.state.question -1].imgdesc2} explanation={questions[this.state.question -1].explanation} id={questions[this.state.question - 1].id}> 
                <button onClick={this.onSubmit}>Almost Done!</button>
              </Question>;
    }
    
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My knives</h1>
            </Jumbotron>
            {this.state.knives.length !==0 ? (
              <List>
                {this.state.knives.map(knives => (
                  <ListItem key={knives._id}>
                    <a href={"/user/" + knives._id}>
                      <strong>
                        {knives.purpose} by {knives._id}
                      </strong>
                    </a>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Knives to Display</h3>
            )}
            {slide}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Knives;
