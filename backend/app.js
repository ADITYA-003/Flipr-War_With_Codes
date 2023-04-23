const express = require('express')
const app = express();
const cors = require('cors')

const Post = require('./model/postSchema')
const PORT = 8082;

app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet"
const connToMongodDb = () =>{
	const conn_str = "mongodb+srv://flipr:warwithcode@flipr.t9vbctd.mongodb.net/flipr"
	mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("Connected to Mongo..."))
		.catch( (error) => console.log(error) );
	}
  connToMongodDb();
  


// app.get('/posts', (req, res) => {
//   res.json(posts);
// });

// app.get('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   res.json(posts[postId - 1]);
// });

app.get('/post', async(req, res)=>{
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error")
  }
})

app.post('/upload', async (req, res) => {
/*   console.log(req.body.file) */

  const postData= Post({Pname:req.body.pname, Pdescription:req.body.pdescr,
    Pcategory:req.body.pcategory,
    
    PImgBlob: req.body.pimgblob})

  console.log(postData)
  try {
    await postData.save();
    res.send("Uploaded")
  }catch(error){
    console.log(error)
    res.status(500).send("Server Error")
  }

  // authenticate the user
  // login the user
  // return res.json({ login: true });
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
