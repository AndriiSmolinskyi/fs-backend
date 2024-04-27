const Router = require('express');
const router = new Router();
const PostController = require('../controller/post.controller');

router.post('/post/create', PostController.createPost);
router.get('/post/getAll', PostController.getAllPosts);
router.put('/post/update', PostController.updatePost);
router.delete('/post/delete/:id', PostController.deletePost);

module.exports = router;