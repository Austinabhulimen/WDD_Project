const baseURL = 'https://superbrackets.herokuapp.com/';

// const baseURL = 'http://127.0.0.1:3000/';
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data
  } else {
    throw { name: 'servicesError', message: data };
  }
}

export default class ExternalServices  {
  constructor() {
    //Using the API means we don't need to tie the dataSource to a specific category anymore. So we can remove this in the constructor.
    // this.category = category;
    // this.path = `../json/${this.category}.json`;
   
  }
  getBrackets() {
    // instead we will pass the category we want in here when we need it.
    return fetch(baseURL + `brackets-list`)
      .then(convertToJson).then((data) => data);
  }

makePost(){
  
  return post(postURL + `add-bracket`)
  .then(convertToJson).then((data) => data);
}




  async getBracketById(id) {
    return await fetch(baseURL + `bracket/${id}`).then(convertToJson)
      .then((data) => data);
  }






  
  async checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
      return await fetch(baseURL + 'checkout/', options).then(convertToJson);
  }
  // make a request to the server for a login token.
  // requires: { email: 'someemail', password: 'somepassword' }
  // returns: a valid jwt token if the email and password are valid.
  async loginRequest(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    const response = await fetch(baseURL + 'login', options).then(convertToJson);
    return response.accessToken;
  }
  // make a request to the server for the current orders
  // requires: a valid token
  // returns: a list of orders
  async getOrders(token) {
    const options = {
      method: 'GET',
      // the server will reject our request if we don't include the Authorization header with a valid token!
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(baseURL + 'orders', options).then(convertToJson);
    return response;
  }
}