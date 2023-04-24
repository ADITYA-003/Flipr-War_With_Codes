import React,{useState} from 'react'
import axios from 'axios'
import "../components/User.css"
const User = () => {
    const [postData, setPostData] = useState([]);
    const [imageData, setImageData] = useState([]);
   

    const onHandleClick = async() =>{
        const fetchData = await axios.get("http://localhost:8082/post", postData);
        setPostData(fetchData.data)
   /*   
        const base64String = fetchData.data[0].PImgBlob.toString('base64');
        console.log(base64String) */
      

 
    }
    
   
  return (
    <div>
      <button onClick={onHandleClick}> Display the data</button>
      {postData.map(user => (
    <div key={user._id}>
      "Podcast Name: {user.Pname}, "Podcast Description: {user.Pdescription}, "Podcast category":{user.Pcategory},
      "Podcast image:{postData && <img src={user.PImage} alt=''/>}      
      </div>
  
  ))}
  {postData.map(user=>(

      <div key={user._id}className='Container'>
        <div className='Card'>
         <div className='imgDiv'>
         <img src={user.PImage} alt="" /><br/>
          {user.Pname}
         </div>
          <div className='Descr'>
          {user.Pdescription}
          </div>
        </div>
      </div>
  ))}
   <div>
    

      </div>
    </div>
  )
}

export default User
