import { useState } from "react";
import { AxiosHelper } from "../helpers/axiosHelper";
import { iBFP, iForm } from "../interfaces";

export const useForm = () => {
  const INITIAL_STATE: iForm = {
    Weight: "", // peso
    Height: "", // altura
    Waist: "", // cintura
    Neck: "", // cuello
    Hip: "", // cadera
    Sex: "",
  };
  const INITIAL_STATE_BFP: iBFP = {
    BFP: 0,
    SI: 0,
    califications: [],
  };
  const [results, setResults] = useState<iBFP>(INITIAL_STATE_BFP);
  const [form, setForm] = useState<iForm>(INITIAL_STATE);
  const disabledButton = (): boolean => {
    if (!form.Weight || !form.Height || !form.Waist || !form.Neck || !form.Sex)
      return true;
    return false;
  };
  const cleanState = () => {
    setForm(INITIAL_STATE);
    setResults(INITIAL_STATE_BFP);
  };
  const onChange = (target: any) => {
    let value = target.value;
    value = value.replace("-", "");
    value = value.replace("+", "");
    value = value.replace("e", "");
    value = value < "0" ? "" : value;
    setForm({ ...form, [target.name]: value });
  };

  const checkValue = (value: "F" | "M" | ""): boolean => {
    if (form.Sex === "") return false;
    if (form.Sex === value) return true;
    return false;
  };
  const onChangeRadio = (value: "F" | "M" | ""): any => {
    setForm({ ...form, Sex: value, Hip: "" });
  };
  const calculate = async (event: any) => {
    event.preventDefault();

    let resp: any = await AxiosHelper({
      url: process.env.REACT_APP_API_URL + "/api/calculeMC",
      type: "post",
      data: form,
      onSuccess(response) {
        return { ...response.data, ok: true };
      },
      onError: (error) => {
        return { ok: false, msg: error.response.message };
      },
    });
    if (!resp.ok) return alert(resp?.msg);
    setResults({
      BFP: resp.BfpUSC,
      SI: resp.BfpSI,
      califications: resp.califications,
    });
  };
  return {
    form,
    setForm,
    disabledButton,
    cleanState,
    onChange,
    checkValue,
    onChangeRadio,
    calculate,
    results,
  };
};
