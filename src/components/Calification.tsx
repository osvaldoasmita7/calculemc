import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { iBFP, iCalification } from "../interfaces";
import { ColourCalification } from "./ColourCalification";

export const Calification = ({ SI, BFP, califications }: iBFP) => {
  const calculePercentajeColour = (value: number) => {
    if (value < 25) return (value * 75) / 25;
    return value + 70 > 100 ? 100 : value + 70;
  };
  return (
    <div>
      <h1 className="text-white text-center">
        Tu resultado es: {SI?.toFixed(2)}%
      </h1>
      <div
        style={{
          paddingLeft: `${calculePercentajeColour(SI) - 5}%`,
          marginBottom: "-4px",
        }}
      >
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ color: "white" }}
          size={"2x"}
        ></FontAwesomeIcon>
      </div>
      <img
        src={require("../assets/images/colores.jpg")}
        className="w-100"
        alt=""
      ></img>
      {/* Color calificación */}
      <div className="row">
        {califications.map((x: iCalification, index: number) => (
          <ColourCalification
            key={index}
            color={x.Color}
            text1={x.Text1}
            text2={x.Text2}
          ></ColourCalification>
        ))}
      </div>
    </div>
  );
};
