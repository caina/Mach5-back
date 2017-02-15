'use strict';

const menuModel = require('./menuModel')

/**
 * TODO:
 * set up the permissions.
 */
module.exports = class MenuController {

    getMenus(req, res) {
        menuModel.find({}, (err, menus) => {
            res.send(menus);
        })
    }

    createOrUpdateMenu(req, res) {
        let menuData = req.body;

        if(req.body._id) {
            delete menuData._id;
            menuModel.update({_id:req.body._id}, menuData, (err, result) => {
                if(err) res.send(err);
                res.send(result);
            });
        } else {
            menuModel.create(menuData, (err, result) => {
                if(err) res.send(err);
                res.send(result);
            });
        }
    }
    
    deleteMenu(req, res) {
        menuModel.remove({_id:req.body._id}, (err, result) => {
            if(err) res.send(err);
            res.send(result);
        });
    }
}