var SuperVillain = require('../models/supervillains.js');

const async = require('async')
// Home Page  index()
exports.index = function(req, res){
	async.parallel({
		villains_count: function(callback){
			SuperVillain.countDocuments({}, callback)
		}
	}, function(err, results){
		if (err) return err
		res.render('index', {title: "What we have!", error: err, data: results}) 
	})
}

// All Super Villains List
exports.supervillain_list = function(req, res, next){
	var query = SuperVillain.find({}, '_id villanName superPower')
		.populate('_id')
		.exec(function(err, SVList){
			if(err) {return next(err)}
			res.render('SVList', {title: 'Super Villains List', supervillain_list: SVList})
		})
}

// All Super Villain Details
exports.supervillain_detail = function(req, res){
	res.send('Not implemented: Super Villains Details')
}

// Super Villain Creating GET
exports.supervillain_create_get = function(req, res){
	res.send('Not implemented: Super Villains Created GET')
}

// Super Villain Creating POST
exports.supervillain_create_post = function(req, res){
	res.send('Not implemented: Super Villains Created POST')
}

// Super Villain Updating POST
exports.supervillain_update_post = function(req, res){
	res.send('Not implemented: Super Villains Updated POST')
}
// Super Villain Updating GET
exports.supervillain_update_get = function(req, res){
	res.send('Not implemented: Super Villains Updated GET')
}

// Super Villain Removing GET
exports.supervillain_delete_get = function(req, res){
	res.send('Not implemented: Super Villains Deleted GET')
}
// Super Villain Removing POST
exports.supervillain_delete_post = function(req, res){
	res.send('Not implemented: Super Villains Deleted POST')
}
