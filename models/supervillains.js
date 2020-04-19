const mongoose = require('mongoose')

var Schema = mongoose.Schema

var SuperVillainSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	villanName: String,
	birthDate: Date,
	nation: String,
	superPower: String,
	heroEnemy: String,
	bio: String,
	pic: String,
	votes:{
		type: Number, 
		min:0
	}
});

SuperVillainSchema
	.virtual('url')
	.get(function () {
  return '/all/' + this._id;
});

module.exports = mongoose.model('SuperVillain', SuperVillainSchema);