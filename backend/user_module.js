// /Step 1: Database connection using connection string
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
//const conn_str = "mongodb://localhost:27017/tcet"
const conn_str = "mongodb+srv://flipr:warwithcode@flipr.t9vbctd.mongodb.net/test"

// here above the inside const conn_str paste your mongodb atlas link
// modify <password> = mamgai
//after .net/ =add tcet(database name)

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );

    const userSchema = new mongoose.Schema({
        Pname: String,
        Pdescription: String,
        Pcategory: String,
        Pimage:  {
            data: Buffer,
            contentType: {
                type: String,
                default: 'image/png'
            }
    }})
//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("FliprUser", userSchema);

exports.User = userObject;    