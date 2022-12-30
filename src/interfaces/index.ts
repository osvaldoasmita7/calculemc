export interface PropsInputCustom {
  label: string;
  placeholder: string;
  value?: string;
  name: string;
  onChange: (value: any) => void;
  required?: boolean;
  type: "number" | "text";
}
export interface PropsInputRadio {
  checked: boolean;
  label: string;
  onChange: (value: any) => void;
}
export interface iForm {
  Weight: string; // peso
  Height: string; // altura
  Waist: string; // cintura
  Neck: string; // cuello
  Hip: string; // cadera
  Sex: "M" | "F" | "";
}
export interface iAxiosParams {
  url: string;
  type: "get" | "post" | "put" | "patch" | "delete";
  data: object;
  onSuccess: (response: any) => void;
  onError: (error: any) => void;
}
export interface iBFP {
  BFP: number;
  SI: number;
  califications:iCalification[];
}
export interface iPropsColourCalification{
  color:string;
  text1:string;
  text2?:string;
}
export interface iCalification{
  Color:string;
  Text1:string;
  Text2?:string;
}