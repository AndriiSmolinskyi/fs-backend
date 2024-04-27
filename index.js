const express = require('express');
const cors = require('cors')
const postRouter = require('./routes/post.router')
const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors({
    origin: 'https://fs-front-peach.vercel.app',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true,
    // optionsSuccessStatus: 204,

}));

app.use(express.json())
app.use('/api', postRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});


app.listen(PORT, () => console.log(`server started on port ${PORT}`));