import React, { useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/SearchBar.css';

function SearchBar() {
  const [searchkey, setsearchkey] = useState("");
  const navigate = useNavigate();
  const invalidRef = useRef(null);

  const handleSearchKey = (e) => {
    setsearchkey(e.target.value);
  }

  const handleSubmit = (e) => {
    (searchkey == "") ? invalidRef.current.style.display = "inline-block" : navigate(`/search/${searchkey}`);
    e.preventDefault();
  }

  const focusHandler =()=>{
    invalidRef.current.style.display = "none";
  }

  return (
    <div className='Searchbar_container'>
      <form onSubmit={handleSubmit} className='Searchbar'>
        <input type="text" placeholder='Search' value={searchkey} onChange={handleSearchKey} onFocus={focusHandler}/>
        <button className="largeButton"  type="submit" >Search</button>
        <button className="mobileButton" type="submit" ><i className="fa-solid fa-magnifying-glass"></i></button>
        <span ref={invalidRef} className="tooltiptext"><i className="fa-solid fa-triangle-exclamation"></i>Please fill out this field</span>
      </form>
    </div>
  );
}
export default SearchBar
