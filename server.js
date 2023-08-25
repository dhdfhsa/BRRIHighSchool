const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes for fetching blog posts and comments
app.get('/api/posts', (req, res) => {
    // Fetch and return list of blog posts
});

app.get('/api/posts/:id', (req, res) => {
    // Fetch and return individual blog post
});

app.post('/api/posts/:id/comments', (req, res) => {
    // Add a new comment to a blog post
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    // You can add fields like author, timestamp, etc.
});

const Comment = mongoose.model('Comment', commentSchema);

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);


app.get('/api/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching blog posts' });
    }
});




app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(404).json({ error: 'Blog post not found' });
    }
});




app.post('/api/posts/:id/comments', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Blog post not found' });
        }

        const newComment = new Comment({
            text: req.body.text,
        });

        post.comments.push(newComment);
        await post.save();

        res.json(newComment);
    } catch (error) {
        res.status(500).json({ error: 'Error adding comment' });
    }
});

const blogListContainer = document.getElementById('blog-list');

fetch('/api/posts')
    .then(response => response.json())
    .then(posts => {
        // Render blog post list
    });

const postId = 'your-post-id';

fetch(`/api/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        // Render individual blog post
    });

const commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', event => {
    event.preventDefault();

    const commentText = document.getElementById('comment-text').value;
    const postId = 'your-post-id';

    fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: commentText }),
    })
    .then(response => response.json())
    .then(newComment => {
        // Handle newly added comment
    });
});