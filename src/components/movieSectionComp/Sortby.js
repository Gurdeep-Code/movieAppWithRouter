import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/sortby.css'

function Sortby({updatePage }) {
    const [sortType,setSorttype] = useState('popular');
    const navigate = useNavigate();
    const sortTypeHandler = (e) =>{
        setSorttype(e.target.value); 
        updatePage(1);
        navigate(`/${e.target.value}`);
    }
    return (
        <div className='sortby'>
            <h2>What's {sortType.replace("_", " ")}</h2>
            <select className='sortbySelect' onChange={sortTypeHandler} >
                <option className='sortbyOption' value="popular">Popular</option>
                <option value="upcoming">Upcoming</option>
                <option value="top_rated">Top Rated</option>
                <option value="now_playing">Now Playing</option>
            </select>
        </div>
    )
}
export default Sortby;
