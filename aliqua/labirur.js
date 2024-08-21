const Datastore = require('nedb');
const db = new Datastore({ filename: 'path/to/datafile', autoload: true });

db.start = function() {
    console.log('Database started');
};

// Call the start method
db.start();
