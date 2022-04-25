import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoInfo } from '../redux/fetchMovies/moviesAction';
import Loader from './Loader';
import Notfound from './Notfound';
import { useParams } from 'react-router-dom';
import '../css/TrailerSection.css';


function TrailerSection() {
  let trailerLink;
  const path ="https://www.youtube.com/watch?v=";
  // const params = useParams();
  // const movieID = params.movieID;
  const {movieID} = useParams();
  const dispatch = useDispatch();
  const { loading, trailerInfo } = useSelector(state => state);
  
  trailerInfo.some((trailerInfo) => {
    if (trailerInfo.type.includes("Trailer") || trailerInfo.type.includes("Teaser")) {
      trailerLink = path+trailerInfo.key;
      return true;
    }
  });

  useEffect(() =>
    dispatch(fetchVideoInfo(movieID))
    , [])

  if (loading) {
    return <div><Loader /></div>
  }
  else {
    return (<div className='TrailerSection'>
      {trailerLink == undefined ? <Notfound>Trailer not available</Notfound> : 
      <div className='player'><ReactPlayer controls url={trailerLink} width='100%' height='100%'/></div>}
    </div>);
  }

}
export default TrailerSection;
