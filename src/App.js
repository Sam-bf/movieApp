import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Moviedata } from './Moviedata';
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';
import FilterMovie from './component/FilterMovie';
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Trailer from './component/Trailer';
import Top10 from './component/Top10';
import Profile from './component/Profile';


function App() {
  const [Movies,setMovies]=useState(Moviedata)
  const [input,setInput]=useState('')
  const addNewMovie=({newMovie})=>{
  setMovies([...Movies,newMovie])


}
  return (
    <div className="wrapper">
      
      
         
     
      <div className='filtAdd'>
      
      <Routes>
        <Route path='/' element={
          <>
          <NavBar/>
     
        <Home/>
        <MovieList Movies={Movies} input={input}/>
        <AddMovie addNewMovie={addNewMovie}/>
      <FilterMovie setInput={setInput}/>
      
        </>
        }/>
        <Route path='/Trailer' element={<Trailer/>}/>
        <Route path='/Top10' element={<Top10/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
      
      
      </div>
    </div>
  )
}

export default App;
