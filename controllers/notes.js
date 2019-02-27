var Note = require('../models/note');

module.exports = {
    index,
    new: newNote,
    create
}



function create(req, res) {
    console.log(req.body, '1234');
    if (req.body.public === 'on') {
        req.body.public = true;
    } else {
        req.body.public = false;
        console.log(req.body, '45678'); 
    }
    var note = new Note(req.body);
    console.log(req.body)
    note.save(function(err) {
        if (err) {
            console.log("you gotta figure out what broke bbygrl");
            return res.render('notes/new');
        };
        console.log(note);
        res.redirect('./notes');
    })
}

function newNote(req, res) {
    res.render('./notes/new');
}

function index(req, res) {
    Note.find({}, function(err, notes) {
        res.render('./notes', { title: 'Dashboard',
            notes
        })
    });
}