import React from "react";
import style from "./Content4.css"


function Content4(){


return (
    <>
    
    <h1 style={{ color: "white", marginRight: "900px", marginTop: "-400px" }}>
        FAQ
      </h1>
      <div className="content">
        <div className="left-content">
          <h3
            style={{
              color: "white",
              opacity: "0.3",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "29px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "rgba(255, 255, 255, 1)",
              marginTop: "-250px",
            }}
          >
            Amet minim mollit non deserunt ullamco est sit 
            <br ></br>
            aliqua dolor do amet
            sint.
          </h3>
        </div>

        <div className="law-section">
          <h2
            style={{
              color: "white",
              marginLeft: "-150px",
              marginTop: "-190px",
            }}
          >
            Do I need a personal injury report?
          </h2>

          <h3
            style={{
              color: "white",
              opacity: "0.3",
              fontFamily: "inter",
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "29px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "rgba(255, 255, 255, 1)",
              marginLeft: "20px",
            }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </h3>
          <hr style={{ color: "rgba(217, 217, 217, 1)", width: "530px" }}></hr>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "270px",
            }}
          >
            <h3 style={{ color: "white" }}>How much is my case worth?</h3>
            <img
              src={require("../../assets/plus.png")}
              width="28"
              height="28"
              alt="icon"
            />
          </div>
          <hr style={{ color: "rgba(217, 217, 217, 1)", width: "530px" }}></hr>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "180px",
            }}
          >
            <h3 style={{ color: "white" }}>
              What should I do right after car accidect
            </h3>
            <img
              src={require("../../assets/plus.png")}
              width="28"
              height="28"
              alt="icon"
            />
          </div>
          <hr style={{ color: "rgba(217, 217, 217, 1)", width: "530px" }}></hr>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "270px",
            }}
          >
            <h3 style={{ color: "white" }}>How much is my case worth?</h3>
            <img
              src={require ("../../assets/plus.png")}
              width="28"
              height="28"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
)
}
export default Content4;