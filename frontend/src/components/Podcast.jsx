import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Podcast = () => {
    const [PodcastData, setPodcastData] = useState([])
    // const navigate = useNavigate();
    
        const fetchPodcast = async (e) => {
         
            try {
              const res = await axios.get('http://localhost:8082/post', PodcastData);
              setPodcastData(res.data)
              console.log(res);
            //   setPodcastData(true);
            } catch (err) {
              console.log(err);
            }
          };
    
  
  return (
    <div>
    
      <button onClick={fetchPodcast}>Displaydata</button>

  {PodcastData.map(user => (
    <div key={user.Pid}>
      "Podcast Name: {user.Pname}, "Podcast Description: {user.Pdescription}, "Podcast category":{user.Pcategory}</div>

      
  ))}
<input type="file" />


    </div>
  )
}

export default Podcast