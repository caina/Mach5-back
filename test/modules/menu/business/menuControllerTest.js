'use strict'

require('root-require')('config/mongo-connection');
const sinon = require('sinon');
const EventEmitter = require('events').EventEmitter;
const MenuController = require('root-require')('modules/menu/business/menuController');

describe('menuControllerTest', () => {
	describe('#getUsers()', () => {
		
		it('should create an user', () => {
			let menuController = new MenuController();
			let spy = sinon.spy(),
			emitter = new EventEmitter();

			let req = {
				body: {
					name: 'mocha test',
					icon: 'mocha_icon',
					link: 'mocha_link'
				}
			};

			let res = {
				send: function() {},
			}

			menuController.createOrUpdateMenu(req, res);
			emitter.on('res.send', function(a, b){

				a.name.should.equal(req.body.name);
				// a.should.equal('bar');
				// b.should.equal('baz');
				done();
			});
		});


		it('should get users', () => {
			let menuController = new MenuController();
		});
	})
});