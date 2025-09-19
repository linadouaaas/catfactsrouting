import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
const Interactivefacts = () => {
  
  const [data, setData] = useState("null");
  const [generate, setGenerate] = useState(false);
  const handleGenerate = () => {
    setGenerate(!generate)
  }
  useEffect(() => {
    const handleData = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setData(data.fact);
    };
    handleData();
 }, [generate]);
  return (
    <div>
    <Link to="/Catsfacts">go to loading</Link>
      {data ? (
        <div>
          <h1>{data}</h1>
          <button onClick={handleGenerate}>generate a fact when u click</button>
        </div>
      ) : (
        <h1>There is no data yet or loading</h1>
      )}
    </div>
  )
}

export default Interactivefacts