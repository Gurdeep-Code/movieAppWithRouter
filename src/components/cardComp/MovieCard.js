import React from 'react';
import StarRating from './StarRating';
import Favorite from './Favorite';
import { useNavigate } from 'react-router-dom';
import '../../css/MovieCard.css'
import 'animate.css';

function MovieCard({ moviesInfo }) {
  const path = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  return (<div className='MovieCard'>
    <div className='cardSection1'>
      <img onClick={()=>navigate(`/details/${moviesInfo.title}/${moviesInfo.id}`,{state:moviesInfo})} className="MovieImage" src={`${path}${moviesInfo.poster_path}`}/>
      <button onClick={()=>navigate(`/trailer/${moviesInfo.title}/${moviesInfo.id}`)}>
        <i className="fa-solid fa-play"></i>
      </button>
    </div>
    <div className='cardSection2'>
      <span onClick={()=>navigate(`/details/${moviesInfo.title}/${moviesInfo.id}`)} className="MovieName">{moviesInfo.title}</span>
      <Favorite movieId={moviesInfo.id} />
    </div>
    <StarRating rating={moviesInfo.vote_average} />
    <div className="cardSection3">
      <div className='InfoMain'>
        <span>Rating</span>
        <span>{moviesInfo.vote_average}</span>
      </div>
      <div className='InfoMain'>
        <span>Lang</span>
        <span>{moviesInfo.original_language}</span>
      </div>
      <div className='InfoMain'>
        <span>Review</span>
        <span>{moviesInfo.popularity.toFixed(0)}</span>
      </div>
    </div>
  </div>);
}

export default React.memo(MovieCard);
