import React from "react";

import style from "./Content3.css"


function Content3(){
    const imageSources = [
        require("../../assets/image1.png"),
        require("../../assets/image2.png"),
        require("../../assets/image3.png"),
      ]




return(
    <div className="content3">
    <div className="topsection">
      <h1 className="heading" style={{ marginRight: "300px" }}>
        What says our happy clients
      </h1>
      <img
        src={require("../../assets/Arrows.png")}
        className="image-style2"
        alt="Icon"
      />
    </div>
    <div className="card-grid">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className={`card-style ${index === 2 ? "middle-card" : ""}`}
        >
          <img
            src={imageSources[index - 1]}
            className="image-style"
            alt={`Icon ${index}`}
          />
          <div className="card-content">
            <h2 style={{ color: "white" }}>
              {index === 1
                ? "Jane Cooper"
                : index === 2
                ? "Devon Lane"
                : "Robert Fox"}
            </h2>
            <h3
              style={{
                color: "white",
                fontFamily: "inter",
                fontSize: "18px",
                fontWeight: "Normal",
                lineHeight: "29px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Ceo of Hunt
            </h3>

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
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)


}
export default Content3