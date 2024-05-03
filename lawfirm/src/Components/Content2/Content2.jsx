import React from "react";
import icon from "../../assets/icon.png"
import sttles from "./Content2.css"
function Content2(){

    return(
        <div className="content2">
        <h1 style={{color:"white",fontSize:"54px"}}>Why Choose Us?</h1>
        <div className="card-grid">

        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className={`card-style ${index === 2 ? "middle-card" : ""}`}
          >
            <img
              src={icon}
              className="image-style"
              alt={`Icon ${index}`}
            />
            <div className="card-content">
              <h2 style={{ color: "white" }}>
                {index === 1 ? "98%" : "100%"} Success Rate
              </h2>
              <p
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
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer
              </p>
            </div>
            <div className="card-bottom">
              <button className="button">Read more</button>
            </div>
          </div>
        ))}





        </div>
        </div>
    )

}
export default Content2