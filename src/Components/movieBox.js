import React from 'react'
import './style.css';
import { useNavigate,useState } from 'react-router-dom';

export default function MovieBox(props) {
    const { genres, image, language, name, runtime, rating,id,premiered } = props.data.show;
    const navigate = useNavigate();
    

    const showSummary = ()=>{
        props.movie(props.data);
         navigate('/Summary')
        
    }

    return (
        <>

            <div className='box'>

                <img className='poster' src={image.original} alt="No image available" />
                
                <p className='movie-name'>{name}</p>

                <p className='director'>{premiered}</p>
                <button className='buttonClass' onClick={ showSummary} >Summary</button>
            </div>

            

        </>
    )
}
