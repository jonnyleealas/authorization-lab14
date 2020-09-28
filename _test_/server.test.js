'use strict';

require('dotenv').config();
const server = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
// const request = require('superagent');
const jwt = require('jsonwebtoken');
const requiregoose = supergoose(server.app);


describe('Basic error testing', () => {

    it('Should give a 404 error on a bad route', async() => {
      let res = await requiregoose.get('/bad');
      expect(res.status).toEqual(404);
    })
  });

describe('Test Auth Router', () => {

    it('Should create a new user', async () => {
        let obj = {
            'username': 'michael',
            'password': 'serra',
            'role': 'regular'
        }
        let res = await requiregoose.post('/signup').send(obj);
        let result = res.body;
        expect(result.user.username).toBe(obj.username);
        expect(result.user.password).toBeDefined();
        expect(result.user.role).toBe(obj.role);
        expect(result.token).toBeDefined();
        expect(res.status).toEqual(200);
    })
});

describe('Test auth routes', () => {

    it('Should create a new user and return regular', async() => {
  
      let obj = {
        username: 'sally',
        password: 'jessy',
        role: 'regular'
      }
  
      let res = await requiregoose.post('/signup').send(obj);
      expect(res.body.user.username).toEqual('sally');
      expect(res.body.user.role).toEqual('regular');
      expect(res.body.user).toBeTruthy();
      expect(res.body.token).toBeTruthy();
      expect(res.status).toEqual(200);
    })
});

describe('Testing signin', () => {

  it('Should sign in and return status 200 ', async() => {

    let obj = {
      username: "sally",
      password: "jessy",
    }

    let result = await requiregoose.post('/signin').auth("sally", "jessy")
    expect(result.body.token).toBeTruthy()
    expect(result.status).toEqual(200)
  })
})