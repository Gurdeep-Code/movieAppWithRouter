import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMoviesInfo } from '../redux/fetchMovies/moviesAction';
import MovieCard from './cardComp/MovieCard';
import Loader from './Loader';
import Notfound from './Notfound';
import '../css/SearchBar.css';

function SearchComp() {
  const dispatch = useDispatch();
  const { searchKey } = useParams();
  const { loading, moviesInfo } = useSelector(state => state);
  const isMoviesinfoEmpty = (moviesInfo.length === 0) ? true : false;

  useEffect(() =>
    dispatch(fetchMoviesInfo(searchKey))
    , [searchKey])

  const moviecards = moviesInfo.map((moviesInfo) => {
    if (moviesInfo.poster_path != null)
      return <MovieCard key={moviesInfo.id} moviesInfo={moviesInfo} />
  })

  return (
    <div className='SearchComp'>
      {loading ? <Loader /> : isMoviesinfoEmpty ? <Notfound>No search found</Notfound> : moviecards}
    </div>
  );
}

export default SearchComp