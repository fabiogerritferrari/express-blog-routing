const express = require('express');
const router = express.Router();
const posts = require('./../public/posts/postsList');



//index
router.get('/', function (req, res) {
    res.json(posts);
});

// show
router.get('/:id', function (req, res) {
    res.json(posts.find((post) => post.id == req.params.id));
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo posts');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica del post' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Cancellazione del post ' + req.params.id);
});

module.exports = router;