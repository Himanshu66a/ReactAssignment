import React from 'react'
import axios from "axios";
import MovieBox from "./movieBox";

import { useState, useEffect } from 'react';

export default function Homescreen(props) {
    const result = props.info;

    // const[result,setresult] = useState([]);

//   useEffect( async() => {
   
//     const response = await axios.get(
//       `https://api.tvmaze.com/search/shows?q=all`,
//     );
//     console.log(response.data);
//     setresult(response.data);
//   }, [])

    

  return (
    <div className="movie-conatiner">
    {
      result.map((ele,index)=>{
        return(
          <MovieBox data={ele} key={index}  />  
        )
      })
    }
  </div>

  )
  
}
