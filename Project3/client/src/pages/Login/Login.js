import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
//import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";
import {Redirect} from "react-router-dom"; //import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Knives from "../Knives/Knives";
import { List } from "../../components/List";

class Login extends Component {
  state = {
    user: [],
    username: "",
    password: "",
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/knives" />
    }
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.loadUser()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  addUser = () => {
    API.addUser()
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    var {name, value} = event.target;
    this.setState({[name]:value})
  }

  onSubmit = (event) => {
    event.preventDefault()
        this.setRedirect();
      }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Login Page</h1>
            </Jumbotron>
            {this.state.user.length===0 ? (
              <div>
              <h3>
                Welcome back!
              </h3>
              
                <p>List knives here from DB</p>
                <div>
                        {this.renderRedirect()}
                        <FormBtn onClick={this.onSubmit}>New custome knife</FormBtn>
                </div>
              </div>
              
                
            ) : (
             <div>
             <h3>
                 No user found, please create a login
             </h3>
                      <div>
                        {this.renderRedirect()}
                        <FormBtn onClick={this.onSubmit}>New User</FormBtn>
                      </div>
            </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
