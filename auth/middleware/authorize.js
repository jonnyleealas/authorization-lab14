'use strict'
/*middleware should go after bearer
can the user do this thing. are they allowed to do whatever
must take a parameter. this is called currying
it will be a function that returns a function
- acl =>model
- model => role field
- acl middlware => usermodel */



module.exports = (capability)=>{
    
    return (req, res, next)=>{
        /*this calls users.methods.can
        we are able to use the method because we require models in auth-router
        everything is combined there
        this will combine the information given in users.method.can with 
        the if statement that checks for the roles.
        one function gives you the roles in a user
        and the other function checks to see if a user certain has a certain role 
        and if the role meets the requirements, you are authorized
        else you are denied access */
            if(req.user.can(capability)){
            next()
        } else{

            next('NOT AUTHORIZED');
        }
    }
}