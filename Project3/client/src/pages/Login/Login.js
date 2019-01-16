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

  renderRedirectNew = () => {
    if (this.state.redirect) {
      return <Redirect to="/user" />
    }
  }

  renderRedirectExist = () => {
    console.log("existing user login")
    if (this.state.redirect) {
      return <Redirect to="/user" />
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
             <div>
             <h3>
                 This section of the website requires you to login
             </h3>
                <div>
                  <form>
                    <Input name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="User name (required)" />
                    <Input name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password (required)" />
                  </form>
                  <div>
                        {this.renderRedirectExist()}
                        <FormBtn onClick={this.onSubmit}>Returning User</FormBtn>
                  </div>
                </div>
                <div>
                        {this.renderRedirectNew()}
                        <FormBtn onClick={this.onSubmit}>New User</FormBtn>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
