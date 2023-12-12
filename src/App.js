import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Moviedata } from './Moviedata';
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';
import FilterMovie from './component/FilterMovie';

function App() {
  const [Movies,setMovies]=useState(Moviedata)
  const [input,setInput]=useState('')
  const addNewMovie=({newMovie})=>{
  setMovies([...Movies,newMovie])


}
  return (
    <div className="wrapper">
      <FilterMovie setInput={setInput}/>
      <MovieList Movies={Movies} input={input}/>
      <AddMovie addNewMovie={addNewMovie}/>
    </div>
  );
}

export default App;
