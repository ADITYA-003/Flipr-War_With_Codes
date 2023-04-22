import React,{useEffect, useState} from 'react'
import axios from 'axios';



const Podcast = () => {
    const [PodcastData, setPodcastData] = useState([])  // this is used to store the podcast info 
    const [file, setFile] = useState([]);  // this is used to store podcast images files
    const [preview, setPreview] = useState(null); // this is used to store the blob url of the image
    const [showFile, setShowFile] = useState(null); //this is used to show the file in binarydata
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
      let bs64 = await toBase64(file); 
      console.log(bs64)
      setShowFile(bs64)
      await axios.post("http://localhost:8082/post",{file:bs64});
      setFile(null)
      setPreview(null)
     

      
  
    }
  
  return (
    <div>
    
      <button onClick={fetchPodcast}>Displaydata</button>

  {PodcastData.map(user => (
    <div key={user.Pid}>
      "Podcast Name: {user.Pname}, "Podcast Description: {user.Pdescription}, "Podcast category":{user.Pcategory}</div>

      
  ))}
<br /><br />

<form onSubmit={handleOnSubmit}>
<input type="file" onChange={handleChange} />
<button type='submit'>Submit</button>
</form>
<hr />
<h1>Preview</h1>
{preview && <img src={preview} alt=""/>}
<hr />


    </div>
  )
}

export default Podcast