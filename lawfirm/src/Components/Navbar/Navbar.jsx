import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.css"



function Navbar(){
    return(
        <>
    <nav className="nav">
<Logo />
 <h1>Home</h1>
<h1> Attroneys</h1>
<h1>Practice area</h1>
<h1>About Us</h1>
<button className="btn">  Contact Now</button>
    </nav>
    </>
    )
}
export default Navbar