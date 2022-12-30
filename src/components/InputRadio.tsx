import React from "react";
import { PropsInputRadio } from "../interfaces";

export const InputRadio = ({ checked, label, onChange }: PropsInputRadio) => {
  return (
    <>
      <input
        type={"radio"}
        className="form-check-input ms-2 me-2"
        checked={checked}
        onChange={(event) => onChange(event.target)}
      ></input>
      <label className="text-white">{label}</label>
    </>
  );
};
