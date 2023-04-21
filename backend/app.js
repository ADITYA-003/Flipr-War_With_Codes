const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8080;

app.use(express.json());
app.use(cors());

const posts = [
  {
    id: 0,
    content: 'Welcome to my first post',
  },
  {
    id: 1,
    content: 'Welcome to my second post',
  },
  {
    id: 2,
    content: 'Welcome to my third post',
  },
];

app.get('/', (req, res) => {
  res.send('Simple backend server');
});

// app.get('/posts', (req, res) => {
//   res.json(posts);
// });

// app.get('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   res.json(posts[postId - 1]);
// });

// app.post('/login', (req, res) => {
//   const post = req.body;
//   console.log(post);
//   // authenticate the user
//   // login the user
//   return res.json({ login: true });
// });

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
