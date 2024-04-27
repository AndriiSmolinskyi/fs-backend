const db = require('../db')

class PostController{

    async createPost(req, res) {
        const {title, content} = req.body
        const newPost = await db.query('INSERT INTO post (title, content) values ($1, $2) RETURNING *', [title, content]);
        res.json(newPost.rows)
    }

    async getAllPosts(req, res){
        const post = await db.query('SELECT * FROM post')
        res.json(post.rows)
    }

    async updatePost(req, res){
        const {title, content, id} = req.body
        const post = await db.query('UPDATE post set title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id])
        res.json(post.rows);
    }

    async deletePost(req, res) {
        const { id } = req.params;
        try {
            await db.query('DELETE FROM post WHERE id = $1', [id]);
            res.json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting post' });
        }
    }


}

module.exports = new PostController()

