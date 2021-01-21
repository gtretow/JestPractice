// users.js
//Mocking Modules

/* Suppose we have a class that fetches users from our API. The class uses axios to call the API then returns the data attribute which contains all the users:
 */

import axios from "axios";

class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}

export default Users;

/* Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the jest.mock(...) function to automatically mock the axios module. */


