import Navbar from './components/Navbar';
import MoviesSection from './components/movieSectionComp/MoviesSection';
import TrailerSection from './components/TrailerSection';
import DetailsSection from './components/DetailsSection';
import CardContainer from './components/cardComp/CardContainer';
import SearchComp from './components/SearchComp';
import { Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MoviesSection/>}>
          <Route index element={<CardContainer/>} /> 
          <Route path=':sortKey' element={<CardContainer/>} /> 
        </Route>
        <Route path='trailer/:movieName/:movieID' element={<TrailerSection/>} />
        <Route path='details/:title/:movieID' element={<DetailsSection/>} />
        <Route path='search/:searchKey' element={<SearchComp/>} />
      </Routes>
    </>    
  );
}
export default App;