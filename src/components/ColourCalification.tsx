import React from "react";
import { iPropsColourCalification } from "../interfaces";

export const ColourCalification = ({
  color,
  text1,
  text2,
}: iPropsColourCalification) => {
  return (
    <div className="px-0" style={{ width: "20%" }}>
      <div
        className="mx-auto"
        style={{
          backgroundColor: color,
          height: 30,
          width: 30,
          borderRadius: 30,
        }}
      >
        &nbsp;
      </div>
      <p className="mb-0 text-white text-center" style={{ fontSize: "12px" }}>
        {text1}
      </p>
      <p className="text-white text-center" style={{ fontSize: "12px" }}>
        {text2}
      </p>
    </div>
  );
};
