import React,{useEffect, useState} from 'react'
import axios from 'axios';

import '../components/ImageDetails.css'

const Podcast = () => {
    const [PodcastData, setPodcastData] = useState([])  // this is used to store the podcast info 
    const [file, setFile] = useState([]);  // this is used to store podcast images files
    const [preview, setPreview] = useState(null); // this is used to store the blob url of the image
    const [data, setData] = useState({
      pname:"",
      pdescr:"",
      pcategory:"",
  /*     pbinaryfile: "" */
    }
    );  

    const convertBs64 = (e) =>{
      console.log(e)
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () =>{
          console.log(reader.result); //base64encoded string
          setData({...data,Pimage:reader.result});
      };
      reader.onerror  = error =>{
          console.log("Error: ", error);
      };
  }
    // const navigate = useNavigate();
    /* 
        const fetchPodcast = async (e) => {
         
            try {
              const res = await axios.post('http://localhost:8082/post', PodcastData);
              setPodcastData(res.data)
              console.log(res);
            //   setPodcastData(true);
            } catch (err) {
              console.log(err);
            }
          }; */
  /*   const handleChange = async (e) =>{
        const inputfile = e.target.files[0]
        setFile(inputfile)

     
        const imgBlob = URL.createObjectURL(inputfile);
        setPreview(imgBlob)
        setData({...data,pimgblob:imgBlob})
        console.log(imgBlob)
        
      }   */
      

    const handleOnSubmit = async(e)=>{
      e.preventDefault();
    
   /*    let bs64 = await toBase64(file); 
      console.log(bs64); */
      
      const res = await axios.post("http://localhost:8082/upload",data);
      console.log(res);
/* 
      const res =await axios.post("http://localhost:8082/upload",{...data,pbinaryfile:bs64}); */

      setFile(null)
      setPreview(null)
  
    } 
 
  return (
    <div>
    

<br /><br />

<form style={{padding:"62px"}} onSubmit={handleOnSubmit}>
<label style={{padding:"42px",fontSize:"34px"}}>
 Podcast Name
</label>  <input type="text" value = {data.pname} id ="pname" onChange={(e) => {
              setData({
                ...data,
                pname: e.target.value,
              });
            }}/> 
<br />
<label style={{padding:"42px",fontSize:"34px"}}>
 Podcast Description
</label>  <input type="text" value = {data.pdescr} id ="pdescr" onChange={(e)=>{
  setData({
    ...data,
    pdescr: e.target.value,
  });
}}/><br />

<label style={{border:"2px",padding:"22px",margin:"22px",fontSize:"34px"}}>Choose a category:</label> 

<select style={{border:"2px solid red",paddingRight:"4px",paddingTop:"8px",margin:"12px"}} name="cat"  value = {data.pcategory}  id="category" onChange={(e)=>{
  setData({
    ...data,
    pcategory: e.target.value,

  });

}} >
 <option value="">Select category</option>
  <option value="audio">Audio</option>
  <option value="Video">Video</option>
</select>
<br />
<div className='wrapper'>
    <div className='childWrapper'>
        <input className='inputFile' 
        accept="image/*"
        type = "file"
        onChange={convertBs64} />

        {data && <img  height={100} widht= {100} src={data.Pimage} alt="" />}
    </div>
  </div>
{/* <input type="file" value ={data.Pfile} onChange={handleChange} /> */}
<br /><br />
<button style={{padding:"12px",background:"#646cff",color:"white"}} type='submit' >Submit</button>
</form>

<hr />
<h1>Preview</h1>
{preview && <img src={data.Pimage} alt=""/>}
<hr />

    </div>
  )
}

export default Podcast;