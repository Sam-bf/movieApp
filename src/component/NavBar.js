import "./NavBar.css";
import Trailer from "./Trailer";
import { Link, Outlet } from "react-router-dom";
const NavBar=()=>{
    return (
        <div>
<nav className="navBar">
<ul className="navList">
    <li>
        <Link to ="/">Home</Link>
        </li>
    <li>
        <Link to ="/Trailer">Trailer</Link>
    </li>
    <li>
        <Link to ="/Top10">Top 10</Link>
        </li>
</ul>
</nav>
<Outlet/>

</div>
    )
}
export default NavBar