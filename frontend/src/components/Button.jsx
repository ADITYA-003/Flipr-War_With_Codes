import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Button = () => {
  const [name, setName] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setName(result);
    };
    getData();
  }, []);
  return (
    <div>
      {name && name.map((item) => (
        <div key={item.id}>{item.Pcategory}</div>
      ))}
      <p>data here</p>
    </div>
  )
}

export default Button