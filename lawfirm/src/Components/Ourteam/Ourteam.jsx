import React from "react";
import team from "../../assets/Ourteam.png"

function Ourteam(){

return(
    <div 
    
    style={{
        backgroundColor: "#191e1e",
        width: "1140px",
        height: "1228px",
        // top: "2171px",
        marginLeft: "270px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#191e1e",
      }}
    
    >
    
    <img src={team} 
    style={{
        width: "100%",
        height: "auto",
        display: "block",
        marginTop: "-300px",
      }}
    
    />
    
    </div>
)

}
export default Ourteam