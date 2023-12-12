import { useState } from 'react';
import ReactModal from 'react-modal';
import "./Addmovie.css";
const AddMovie=({addNewMovie})=>{
    const [show,setShow]=useState(false)
    const handelShow=()=>{setShow(!show)}
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [type, setType] = useState("");
    const [season, setSeason] = useState("");
    const AddMv=()=>{
        let newMovie={id:Math.random(),name,description,date,rating,image,type,season} 
        addNewMovie(newMovie)
        handelShow()
    }


    return(
        <>
        <button onClick={handelShow}>Add movie</button>
        <ReactModal isOpen={show} className="add-modal">
        <h1 className="addMovie-h1">Add A Movie</h1>
        <button className="Modal-btn" onClick={AddMv}>
          Submit
        </button>
        <button className="Modal-btn" onClick={handelShow}>Close</button>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            placeholder='please write '
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Release Date</label>
        
          <input
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Movie Season</label>
          <input
            type="number"
            name="season"
            onChange={(e) => setSeason(e.target.value)}
          />
          <div className="rating-search">
            <label>Movie rating</label>
            <input type="number" onChange={(e) => setRating(e.target.value)} />
          </div>
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        
        
        
</ReactModal>
</>

    )
}
export default AddMovie

