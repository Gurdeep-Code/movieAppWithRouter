import React from 'react';
import MovieCard from './MovieCard';
import { useOutletContext } from 'react-router-dom';
import '../../css/MoviesSection.css';

function CardContainer() {
    const {moviesInfo} = useOutletContext();

    const moviecards = moviesInfo.map((moviesInfo) => {
            if (moviesInfo.poster_path != null)
                return <MovieCard key={moviesInfo.id} moviesInfo={moviesInfo} />
        })

    return (
        <div className='cardContainer'>
            {moviecards}
        </div>
    );
}
export default CardContainer
