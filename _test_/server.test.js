'use strict';

const supergoose = require('@code-fellows/supergoose');
const request = require('superagent');
require('dotenv').config();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const server = require('../server.js');
const req = supergoose(server.app);


describe('Basic error testing', () => {

    it('Should give a 404 error on a bad route', async() => {
  
      let res = await req.get('/bad');
      expect(res.status).toEqual(404);
      
    });
    
  });

// describe('Test Auth Router', () => {

//     it('Should create a new user', async () => {
//         let obj = {
//             'username': 'Jon',
//             'password': 'Jon',
//             'role': 'regular'
//         }
//         let res = await request.post('/signup').send(obj);
//         let output = res.body;
//         expect(output.user.username).toBe(obj.username);
//         expect(output.user.password).toBeDefined();
//         expect(output.user.role).toBe(obj.role);
//         expect(output.token).toBeDefined();
//         expect(res.status).toEqual(200);


//     })

// })

describe('Test auth routes', () => {

    it('POST /signup creates a new user and sends an object with the user and the token to the client ', async() => {
  
      let obj = {
        username: "test",
        password: "test",
        role: "regular"
      };
  
      let res = await req.post('/signup').send(obj);
      
      expect(res.body.user.role).toEqual("regular");
      expect(res.body.token).toBeTruthy();
      expect(res.body.user).toBeTruthy();
      expect(res.body.user.username).toEqual("test");
      expect(res.status).toEqual(200);
      
    });
})