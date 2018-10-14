var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var seatSchema = new Schema(
    {
        row: {type: String},
        number: {type: String},
        status: {type: String},
        aisle: {type: String}
    }
);

var screenSchema = new Schema(
    {
        name: { type: String, unique: true },
        seats: [seatSchema]
    }
);


//Export model
module.exports = mongoose.model('Screen', screenSchema);