import React from "react";
import { PropsInputCustom } from "../interfaces";

export const InputCustom = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  type,
  required = false,
}: PropsInputCustom) => {
  return (
    <>
      <h4 className="text-white mt-4 mb-3">{label}</h4>
      <input
        className="form-control"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(event) => {
          onChange(event.target);
        }}
        required={required}
        min={0}
        type={type}
      ></input>
    </>
  );
};
