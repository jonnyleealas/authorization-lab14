# Testing Bearer Auth and Edit Authorization
This is a restful api with OAuth and Bearer Auth capabilities. A user will have the ability to sign-up, login, and receive a token. Authorization is also implented in particular routes for higher security. 

## Step 1
```
Run npm i
```
## Step 2
Touch .env and use the following variables so hide backend secrets.
```
add a .env folder in your root 
Add a PORT=<path>
Add a SECRET=<secret>
Add a MONGODB_URI=<path>
```
## Testing
``` 
npm test server.test.js
```