import React,{useState} from 'react'
import axios from 'axios'
import Data from './Data';
const User = () => {
    const [postData, setPostData] = useState([]);
   

    const onHandleClick = async() =>{
        const fetchData = await axios.get("http://localhost:8082/post", postData);
        setPostData(fetchData.data)
      

 
    }
    
   
  return (
      <div style={{ maxHeight: "2000px" }}>
        <button style={{marginTop:"22px",background:"#646cff",color:"white"}} onClick={onHandleClick}> Display the data</button>
        <div style={{ background: "#646cff", color: "wheat", marginTop: "252px",border:"4px solid blue" }}>
          <h1 style={{color:"cyan"}}>YOUR PODCAST LIST</h1>
          <div style={{position:'absolute',top:"850px",left:"0px",background:"#646cff",margin:"12px"}}>
        {postData.map(user => (
      <div style={{ display: "flex", direction: "row", justifycontent: "center" }}  key={user._id}>
                  <div style={{ padding: "22px", lineHeight: "22px", borderWidth: "92px" }}>"1.Podcast Name: {user.Pname}</div>,
                <div style={{ padding: "22px" }}> "2.Podcast Description: {user.Pdescription}</div>,
                <div style={{ padding: "22px" }}> "3.Podcast category":{user.Pcategory}</div>,
                <div>"4.Post Image:{postData && <img style={{height:"100px",width:"100px"}} src={user.PImgBlob} alt='' />}</div>
              </div>
  
            ))}
            
          </div>
        </div>
        </div>
      )
}
export default User
