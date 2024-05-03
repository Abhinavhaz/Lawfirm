import React from "react";
import Style from "./Content5.css"


function Content5 (){


    return (
        <>
          <div className="Newsletter">
        <h1
          style={{
            color: "white",

            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingTop: "100px",
          }}
        >
          Subscribe Our Newsletter
        </h1>

        
        <div className="inputcontent">
          <input
            type="text"
            className="custom-search-input2"
            placeholder="Name"
          />
          <input
            type="text"
            class="custom-search-input3"
            placeholder="Enter your email"
          />
          <button class="custom-search-botton2" type="submit">
            Send
          </button>
        </div>
      </div>
        </>
    )
}
export default Content5