var mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        email: { type: String, unique: true },
        password: {type: String},
        profile: {
            first_name: {type: String},
            last_name: {type: String},
            date_of_birth: {type: Date},
            gender: {type: String}
        }
    }
);

// Password hash middleware.
UserSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')) { return next(); }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

// Helper method for validating user's password.
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        cb(err, isMatch);
    });
};

// Virtual for user's full name
UserSchema.virtual('name').get(function () {
        return this.profile.last_name + ', ' + this.profile.first_name;
    });


//Export model
module.exports = mongoose.model('User', UserSchema);