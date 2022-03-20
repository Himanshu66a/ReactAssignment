import React, { useState } from 'react'
import './style.css';
import { useNavigate} from 'react-router-dom';


export default function Summary(props) {
  const { genres, image, language, name, runtime, rating, id, summary,type } = props.info.show;
  const [flag, setflag] = useState(false);
  const [success, setsuccess] = useState(false);

  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    setflag(false)
    setsuccess(true);
  }

  return (
    <>
      <div className='details-box'>

        <div>
        <img src={image.original}></img>
        </div>

        <div className='Details'>
          <p>{name}</p>
          <p>Language - {language} </p>
          <p>Genres - {genres} </p>
          <p>Type - {type}</p>
          <p>{summary}</p>
        </div>
      </div>
      <button className='book' onClick={() => {setflag(true); setsuccess(false)}}>Book Now</button>
      <button className='book' onClick={() =>  navigate(-1)}>Back</button>

      {
        flag ? <div >
          
          <div className='input-form'>
            <div>Movie Name - {name}</div>
            <div>Language - {language}</div>
            <input type="text" placeholder='Enter name..' />
            <input type="date" />
            <input type="time" />
            <a href="/" id='book-btn' className='' onClick={handle}>Book</a>
          </div>
        </div> : null
      }
      <div>
        {
          success ? <div className='done'>
            Congrats ticket booked
            </div>
             : null
        }
      </div>




    </>

  )
}
