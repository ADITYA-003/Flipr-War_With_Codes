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
	const conn_str = "mongodb+srv://flipr:warwithcode@flipr.t9vbctd.mongodb.net/test"
	mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("Connected to Mongo..."))
		.catch( (error) => console.log(error) );
	}
  connToMongodDb();
  
const posts = [
  {
    Pid:0,
 Pname: "Spooky Stories",
Pdescription: "Japan ke Kuchh Aise Urban Legend ki kahani aaj mai apke samne le kar a...",
Pcategory : "Audio",
Pimage:""
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

app.post('/post', async (req, res) => {
/*   console.log(req.body.file) */

  const postData= Post({Pname:req.body.pname, Pdescription:req.body.pdescr,
    Pcategory:req.body.pcategory,
    PBinImage: req.body.file})

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
