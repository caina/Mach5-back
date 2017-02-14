'use-strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

/**
 * TODO:
 * Should have some auto reference here, so we could create
 * two levels menus.
 */

const MenuSchema = new Schema({
    name: String, 
    icon: String,
    position: Number,
    link: String
});

module.exports = mongoose.model(`mach_menu`,MenuSchema);