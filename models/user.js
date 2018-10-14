var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: {type: String},
        profile: {
            first_name: {type: String},
            last_name: {type: String},
            date_of_birth: {type: Date},
            gender: {type: String}
        }
    }
);

// Virtual for user's full name
UserSchema
    .virtual('name')
    .get(function () {
        return this.profile.last_name + ', ' + this.profile.first_name;
    });


//Export model
module.exports = mongoose.model('User', UserSchema);