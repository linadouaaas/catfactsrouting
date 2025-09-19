import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Catsfacts = () => {

  const [data, setData] = useState("null");
  useEffect(() => {
    const handleData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setData(data.fact);
    };
    handleData();}, []);
  return (
    <div>
        <Link to="/">go to generate</Link>
      {data ? (
        <div>
        <h1>cat fact that will show when u load the page:</h1> 
        <h1>{data}</h1>
          
        </div>
      ) : (
        <h1>There is no data yet or loading</h1>
      )}
    </div>)
}

export default Catsfacts