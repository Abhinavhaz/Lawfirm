import React from "react";
import Msg from "../../assets/Message.png"
import style from "./Hero.css"
import hero from "../../assets/Hero.png"
function Hero(){
return (
<div style={{
        display: "flex",
        justifyContent: "center",
        background: "black",
        height: "750px",
        // marginTop:"100px",
        
      }}>

<div>
    <h1  style={{
            color: "white",
           fontWeight: "500",
           width:'571px' ,
        height:"194px",
        top :"250px",
        left:"156px",
        fontFamily:"inter",
        fontSize:"66px",
        lineHeight: "97px",
        letterSpacing: "0em",

        textAlign: "left",

            
          }}>   You don't have to Fight them alone</h1>

<h3 
style={{
width: '560px',
height: '99px',
top: '480px',
left: '158px',
// gap: '0px',
opacity:' 0.3',
color: "rgba(255, 255, 255, 1)",
fontFamily: "inter",
fontSize: "18px",
fontWeight: "500",
  lineHeight: "29px",
            letterSpacing: "0em",
            textAlign: "left",
}}
> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam quasi sapiente. Nam fugiat consequuntur id rerum ratione ipsam tenetur ducimus delectus,
     velit corrupti dolor consequatur at dolorem itaque voluptatum!</h3>

<div className="search">

<span style={{top:"50%",border:0,borderRadius:"50%",
background:"lightgrey",marginLeft:"10px",position:"absolute",transform:"translateY(-50%)"}}>

    <img src={Msg} width="20" height="20" />
</span>


<input type="text" className="Search-input" placeholder="Enter your Email address"/>

<button className="Search-button" type="submit">
Let's Talk
</button>
</div>
</div>
<div>

{/* marginTop: "250px", */}
<div >
<img style={{marginTop:"4px"}} className="hero" src={hero}  />
</div>



</div>
</div>

)

}
export default Hero