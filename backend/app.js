const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8082;

app.use(express.json());
app.use(cors());

const posts = [
  {
    Pid:0,
 Pname: "Spooky Stories",
Pdescription: "Japan ke Kuchh Aise Urban Legend ki kahani aaj mai apke samne le kar a...",
Pcategory : "Audio",
//  Pimage: BinData(0, 11)
  }
];

// app.post('/', (req, res) => {
//   res.send(posts);
// });

// app.get('/posts', (req, res) => {
//   res.json(posts);
// });

// app.get('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   res.json(posts[postId - 1]);
// });

app.get('/post', (req, res) => {
  const post = req.body;
  console.log(post);
  res.send(posts)
  // authenticate the user
  // login the user
  // return res.json({ login: true });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
