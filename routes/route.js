'use-strict'

const express = require('express');
const glob = require('glob');

let router = express.Router();
router.use(function(req, res, next) {
	console.log('Handle connection.');
	next();
});

glob('modules/*/*.route.js', (err, files) => {
	for (var i = files.length - 1; i >= 0; i--) {
        require("./../"+files[i])(router);
	}
	console.log(`Founded modules: `, files);
})

// Add your fixed routes here
module.exports = router;