import React, {useState} from 'react';
import './App.css';
import Add from './components/add/Add';
import MovieList from './components/display/movieList';
import Navbarr from './components/navbar/Navbar';
import Search from './components/search/Search';
import { moviesData } from "./moviesData";
        console.log(moviesData)

function App() {
  const [movieList,setmovieList]=useState(moviesData)
  
  const addHandler=(newMovie)=>{
    setmovieList([...movieList, newMovie])
  }
  
  //get the data from user (movie title)
  const [search,setSearch]=useState("");
  //get the data from user (movie rating)
  const [rate,setRate]=useState(1);
  return (
    <div className="App">
      <Navbarr/>
      <Search setSearch={setSearch} rate={rate} setRate={setRate} />
      <Add addHandler={addHandler}/>
      <MovieList movieList={movieList} search={search} rate={rate} />
    </div>
  );
}

export default App;
