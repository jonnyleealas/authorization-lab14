'use strict';


const server = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
// const request = require('superagent');
const jwt = require('jsonwebtoken');
const requiregoose = supergoose(server.app);


describe('Basic error testing', () => {

    it('Should give a 404 error on a bad route', async() => {
      let res = await requiregoose.get('/bad');
      expect(res.status).toBe(404);
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
        expect(res.status).toBe(200);
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
      expect(res.body.user.username).toBe('sally');
      expect(res.body.user.role).toBe('regular');
      expect(res.body.user).toBeDefined();
      expect(res.body.token).toBeDefined();
      expect(res.status).toBe(200);
    })
});

describe('Testing signin', () => {

  it('Should sign in and return status 200 ', async() => {

    let obj = {
      username: "sally",
      password: "jessy",
    }

    let result = await requiregoose.post('/signin').auth("sally", "jessy")
    expect(result.body.token).toBeDefined()
    expect(result.status).toBe(200)
  })
})