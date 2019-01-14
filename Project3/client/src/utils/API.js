import axios from "axios";

function determineEnv() {
  const frontEndHost = window.location.hostname;

  if (frontEndHost === 'localhost') {
    return 'DEV';
  }
  // Insert staging condition here
  // Insert production condition here
}

function determineBackendHost() {
  if (determineEnv() === 'DEV') {
    return 'http://localhost:3001';
  } else {
    throw new Error('This front end environment is not supported. Please modify utils/API.js to support it.');
  }
}

export default {
  //adds user to the db
    addUser: function(){
        return axios.post("/")
    },
  //loads user from the db
  loadUser: function() {
      return axios.get("/");
  },
    // Gets all knives
  getKnives: function() {
    console.log('hi mom')
    return axios.get(`${determineBackendHost()}/api/knives`); //
  },
  // Gets the knife with the given id
  getKnife: function(id) {
    return axios.get("/api/knife/" + id);
  },
  // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
  saveKnives: function(knivesData) {
    return axios.post("/api/knives", knivesData);
  }
};
