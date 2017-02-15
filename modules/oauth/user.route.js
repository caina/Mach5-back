'use strict';
const UserController = require('./userController');
let userController = new UserController();

module.exports = (router) => {
    
    router.route('/oauth/user')
        .get((req, res)=> {
          res.send("??");  
        })
        .post((req,res) => {

        });

}

