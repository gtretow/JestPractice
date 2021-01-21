// user.js
//Let's implement a module that fetches user data from an API and returns the user name.
import request from "./request";

export function getUserName(userID) {
  return request("/users/" + userID).then((user) => user.name);
}
