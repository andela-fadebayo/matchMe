/*Andela MEAN final stack project - matchMe
Fiyinfoluwa S. Adebayo
12th January, 2015*/

//require Mongoose dependency
var mongoose = require('mongoose');
var myUnique = require('mongoose-unique-validator');

//create Users schema for user's data
var Schema = mongoose.schema;

//connect to mongodb local database
var usersURI = 'mongodb://localhost/matchMe';

//place connection to mongoLab here

mongoose.connect(usersURI);

//test mongoose connection
var matchMedb = mongoose.connection;
matchMedb.on('error', console.error.bind(console, 'matchMe connection error: '));
matchMedb.once('open', function (success) {
  console.log('Connection to matchMe database is successful!');
});

//create a new user schema
var userSchema = new Schema({
  user_id: Schema.ObjectId,
  first_name: {type: String, trim: true, required: true},
  last_name: {type: String, trim: true, required: true},
  username: {type: String, trim: true, lowercase: true, unique: true }, //username: first_name.last_name (to lower case)
  email: {type: String, trim: true, lowercase: true, required: true, unique: true },
  sex: {type: String, required: true},
  age: {type: Number, min: 2, max: 3},
  state: {type: String, trim: true},
  country: {type: String, trim: true},
  picture: String,
  interest: { type: Array, default: "No Interests" },
  likes: { type: Array, default: "No Likes" },
  dislikes: { type: Array, default: "No Dislikes" },
  fav_foods: { type: Array, default: "No favourite foods" },
  programming_languages: { type: Array, default: "I don't know any programming languages" },
  certificates: { type: Array, default: "I'm dry....no certificates!" },
  accomplishments: { type: Array, default: "...working on it!" },
  social_networks: { [{ facebook: String, instagram: String, github: String }], default: "I'd rather stay offline." },
  joined_on: { type: Date, default: Date.now }
});

//Apply myUnique validator plugin to userSchema
userSchema.plugin(myUnique);

//convert userSchema into a Model to export and work with
var Users = mongoose.model('users', userSchema);

//export Users model so other files can use it
module.exports = Users;
