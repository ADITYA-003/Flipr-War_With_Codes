import React,{useState} from 'react'
import axios from 'axios'
const User = () => {
    const [postData, setPostData] = useState([]);

    const onHandleClick = async() =>{
        const fetchData = await axios.get("http://localhost:8082/post", postData);
        setPostData(fetchData.data);
       
    }
  return (
    <div>
      <button onClick={onHandleClick}> Display the data</button>
      {postData.map(user => (
    <div key={user._id}>
      "Podcast Name: {user.Pname}, "Podcast Description: {user.Pdescription}, "Podcast category":{user.Pcategory}
      
      "Post Image:{user.PBinImage && <img src = {user.PBinImage} alt=''/>}</div>


      
  ))}
    </div>
  )
}

export default User
