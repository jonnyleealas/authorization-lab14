'use strict';
const superGoose = require('@code-fellows/supergoose');
const { app } = require('../server');
const goose = superGoose(app);
require('dotenv').config();
const jwt = require('jsonwebtoken');

describe('Test API Server Error', () => {

    it('Should respond 404 for an invalid route', async () => {

        let response = await goose.get('/kidbuu');
        let result = response.status;
        console.log(response.status);
        expect(result).toEqual(404)
    })
})

describe('Test Auth Router', () => {

    it('Should create a new user', async() => {

        

    })
})