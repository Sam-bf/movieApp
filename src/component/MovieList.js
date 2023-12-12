import MovieCard from "./MovieCard"

const MovieList=({Movies,input})=>{
       return (
        <div  style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap" }} >
        {
        Movies.filter((el)=>el.name.includes(input))
        .map((el)=>(
            <MovieCard el={el}/>
            ))
    }
        </div>
    )
}
export default MovieList