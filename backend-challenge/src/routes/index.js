const {addPost, getPosts} = require('../services');
const {Router} = require('express');
const router = Router();

router.get('/post', (req, res) => getPosts(req, res));
router.post('/post', (req, res) => addPost(req, res));

module.exports = router;
