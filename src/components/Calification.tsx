import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { iBFP, iCalification } from "../interfaces";
import { ColourCalification } from "./ColourCalification";

export const Calification = ({ SI, BFP, califications }: iBFP) => {
  return (
    <div>
      <h1 className="text-white text-center">
        Tu resultado es: {SI.toFixed(2)}%
      </h1>
      <div style={{ paddingLeft: `${SI - 5}%`, marginBottom: "-4px" }}>
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ color: "white" }}
          size={"2x"}
        ></FontAwesomeIcon>
      </div>
      <img
        src={require("../assets/images/colores.jpg")}
        className="w-100"
      ></img>
      {/* Color calificación */}
      <div className="row">
        {califications.map((x: iCalification) => (
          <ColourCalification
            color={x.Color}
            text1={x.Text1}
            text2={x.Text2}
          ></ColourCalification>
        ))}
      </div>
    </div>
  );
};
