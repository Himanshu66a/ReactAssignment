import React from "react";
import axios from "axios";
import MovieBox from "./Components/movieBox";
import './App.css';
import { useState, useEffect } from 'react';
import Homescreen from "./Components/Homescreen";
import { Routes, Route } from 'react-router-dom';
import Summary from "./Components/Summary";

function App() {
  const[result,setresult] = useState([]);
  const [movie, setmovie] = useState({});


  useEffect( async() => {

    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=all`,
    );
    console.log(response.data);
    setresult(response.data);
  }, []);

  return (
    <>
    <div className="heading">Book Tickets Now</div>
      <Routes>
        <Route  path='/' element={
         <div className="movie-conatiner">
         {
           result.map((ele,index)=>{
             return(
               <MovieBox data={ele} key={index} movie={setmovie}  />  
             )
           })
         }
       </div>  
        }/>
        <Route  path='/Summary' element={<Summary info={movie}  />}/>
      </Routes>
      {/*     
    <div className="movie-conatiner">
      {
        result.map((ele,id)=>{
          return(
            <MovieBox data={ele} key={id} />  
          )
        })
      }
     
    </div> */}
    </>
  );
}

export default App;
