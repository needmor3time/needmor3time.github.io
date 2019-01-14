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

class User extends Component {
  state = {
    user: [],
    name: "",
    username: "",
    password: "",
    streetAddress: "",
    apartmentNum: "",
    city: "",
    zipcode: "",
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
    const userData = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      streetAddress: this.state.streetAddress,
      apartmentNum: this.state.apartmentNum,
      city: this.state.city,
      zipcode: this.state.zipcode
    } 
    console.log("userData: ", userData);
    axios.post("/api/user/", userData).then(
      (data) => {
        console.log("data", data);
        this.setRedirect();
      }
    ).catch(
      function(err) {
        console.log("err: ", err);
      }
    )
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>User Page</h1>
            </Jumbotron>
            {/* {this.state.name} */}
            {this.state.user.length===0 ? (
              <h3>
                Welcome back!
              </h3>
                
            ) : (
             <div>
             <h1>Please sign up</h1>
              <form>
                    <Input name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Name (required)" />
                    <Input name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="User name (required)" />
                    <Input name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password (required)" />
                    <Input name="streetAddress" value={this.state.streetAddress} onChange={this.handleInputChange} placeholder="Address (required)" />
                    <Input name="apartmentNum" value={this.state.apartmentNum} onChange={this.handleInputChange} placeholder="Apartment (Optional)" />
                    <Input name="city" value={this.state.city} onChange={this.handleInputChange} placeholder="City (required)" />
                    <Input name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} placeholder="Zip Code (required)" />
                    {/* <Router> */}
                      <div>
                        {/* <Link to="/knives"> */}
                        {this.renderRedirect()}
                        <FormBtn onClick={this.onSubmit}>Submit</FormBtn>
                        {/* </Link>
                        <Route path="/knives" component={Knives} /> */}
                      </div>
                    {/* </Router> */}
              </form>
            </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
