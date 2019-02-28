var Note = require('../models/note');

module.exports = {
    index,
    new: newNote,
    create,
    show,
    delete: deleteNote,
}

function deleteNote(req, res) {
    Note.findByIdAndRemove(req.params.id, function(err, todo) {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Note successfully deleted",
        };
    });
    res.redirect('/notes');
}

function show(req, res) {
    Note.findById(req.params.id, function(err, notes) {
        console.log(notes)
        res.render('notes/show', {
            notes
        })
    });
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