import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesInfo } from '../../redux/fetchMovies/moviesAction';
import Sortby from './Sortby';
import Pageination from './Pageination';
import Loader from '../Loader';
import Notfound from '../Notfound';
import { useParams, Outlet } from 'react-router-dom';
import '../../css/MoviesSection.css'

function MoviesSection() {
  const dispatch = useDispatch();
  const { sortKey } = useParams();
  const { loading, moviesInfo } = useSelector(state => state);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() =>
    dispatch(fetchMoviesInfo(null, sortKey, currentPage))
    , [sortKey, currentPage])

  return (
    <div className='MoviesSection'>
      <Sortby updatePage={setCurrentPage} />
      {loading ? <Loader /> :
        (<>
          <Outlet context={{ moviesInfo }} />
          <Pageination currentPage={currentPage} updatePage={setCurrentPage} />
        </>)}
    </div>);
}

export default MoviesSection;
