const filterMovie=({setInput})=>{
    return(
        <>
        <input onChange={(event)=>setInput(event.target.value)}/>
        </>
    )
}
export default filterMovie