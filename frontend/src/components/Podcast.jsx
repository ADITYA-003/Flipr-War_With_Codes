import React,{useEffect, useState} from 'react'
import axios from 'axios';



const Podcast = () => {
    const [PodcastData, setPodcastData] = useState([])  // this is used to store the podcast info 
    const [file, setFile] = useState([]);  // this is used to store podcast images files
    const [preview, setPreview] = useState(null); // this is used to store the blob url of the image
    const [showFile, setShowFile] = useState(null); //this is used to show the file in binarydata

    const [data, setData] = useState({
      pname: "",
      pdescr: "",
      pcategory:"",

    })
    // const navigate = useNavigate();
    
        const fetchPodcast = async (e) => {
         
            try {
              const res = await axios.post('http://localhost:8082/post', PodcastData);
              setPodcastData(res.data)
              console.log(res);
            //   setPodcastData(true);
            } catch (err) {
              console.log(err);
            }
          };
    const handleChange = (e) =>{
        const inputfile = e.target.files[0]
        setFile(inputfile)
       
        const imgBlob = URL.createObjectURL(inputfile);
        setPreview(imgBlob)
    }
    const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
 
 
    const handleOnSubmit = async(e)=>{
      e.preventDefault();
         // create a new form data object
    /*    const formData = new FormData();
       formData.append('formData', data);
        console.log("freshAppend", formData) */
      let bs64 = await toBase64(file); 
      console.log(bs64)
      setShowFile(bs64)
 /*      formData.append('file', bs64); */
 const formData = new FormData();
      formData.append("data",data)
      formData.append("img", showFile)
      const res =await axios.post("http://localhost:8082/post",formData);
      console.log(res);
      setFile(null)
      setPreview(null)
     

      
  
    }
  const myFunction = () =>{}
  return (
    <div>
    
      <button onClick={fetchPodcast}>Displaydata</button>

  {PodcastData.map(user => (
    <div key={user.Pid}>
      "Podcast Name: {user.Pname}, "Podcast Description: {user.Pdescription}, "Podcast category":{user.Pcategory}</div>

      
  ))}
<br /><br />

<form onSubmit={handleOnSubmit}>
<label>
 Podcast Name
</label>  <input type="text" value = {data.pname} id ="pname" onChange={(e) => {
              setData({
                ...data,
                pname: e.target.value,
              });
            }}/> 
<br />
<label>
 Podcast Description
</label>  <input type="text" value = {data.pdescr} id ="pdescr" onChange={(e)=>{
  setData({
    ...data,
    pdescr: e.target.value,
  });
}}/><br />

<label>Choose a category:</label> 

<select name="cat"  value = {data.pcategory}  id="category" onChange={(e)=>{
  setData({
    ...data,
    pcategory: e.target.value,

  });
}} >
  <option value="audio">Audio</option>
  <option value="Video">Video</option>
</select>
<br />

<input type="file" value ={data.Pfile} onChange={handleChange} />
<br /><br />
<button type='submit' >Submit</button>
</form>

<hr />
<h1>Preview</h1>
{preview && <img src={preview} alt=""/>}
<hr />


    </div>
  )
}

export default Podcast