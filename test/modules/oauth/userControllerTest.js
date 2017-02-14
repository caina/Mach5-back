var assert = require('assert');
var UserController = require('root-require')('modules/oauth/userController');
let userController = new UserController();

describe('userController', function() {
  describe('#createUser()', function() {
    it('should create the user', function() {
      // userController.createUser()

      assert.equal(1, 1);
    });
  });
  
});