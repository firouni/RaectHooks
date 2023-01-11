import React, {useState} from 'react';
import './App.css';
import Add from './components/Add';
import MovieList from './components/movieList';
import Navbarr from './components/Navbar';
import Search from './components/Search';
import Trailer from './components/Trailer';
import { Routes, Route } from "react-router-dom";
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
      
      <Trailer/>
      <Routes>
        <Route path='/movies' element={<MovieList/>}/>
        <Route path='/trailer/:id' element={<Trailer movieList={movieList} />}/>
      </Routes>
    </div>
  );
}

export default App;
