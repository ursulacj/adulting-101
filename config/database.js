var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {reconnectInterval: 500});

// database connection event
mongoose.connection.on('connected', function () {
    console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});


module.exports = mongoose;