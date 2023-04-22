import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Podcast = () => {
    const [PodcastData, setPodcastData] = useState([])
    // const navigate = useNavigate();
      useEffect(()=>{
        const Podcast1 = async (e) => {
            // console.log(formData);
            // console.log(PodcastData)
            try {
              const res = await axios.get('http://localhost:8081/post', PodcastData);
              console.log(res);
            //   setPodcastData(true);
            } catch (err) {
              console.log(err);
            }
          };
        //   Podcast1();
      },[]
      
      )  
  return (
    <div>
      <button onClick={Podcast1}>Displaydata</button>
      <ul>
  {PodcastData.map(item => (
    <li key={item.Pid}>{item.Pcategory}</li>
  ))}
</ul>
{/* <button onClick={() => {navigate(`/post/${post.Pid}`)}}>View</button> */}
    </div>
  )
}

export default Podcast