var mongoose = require('mongoose');

module.exports= function() {
    var schema = mongoose.Schema({
        license_plate: {
            type: String,
            required: true
        },
        checkin: {
            type: String,
            required: true,
        },
        checkout: {
            type: String,
            required: true
        }
    });
    
    return mongoose.model('Car', schema);
}