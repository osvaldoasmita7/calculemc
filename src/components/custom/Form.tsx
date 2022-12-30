import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputCustom } from "../InputCustom";
import { InputRadio } from "../../components/InputRadio";
import { useForm } from "../../hooks/useForm";
import { Calification } from "../Calification";
export const Form = () => {
  const {
    form,
    results,
    disabledButton,
    cleanState,
    onChange,
    checkValue,
    onChangeRadio,
    calculate,
  } = useForm();

  return (
    <div className="row">
      <div className="col-md-6 col-lg-5 px-4">
        <form onSubmit={calculate}>
          <InputRadio
            checked={checkValue("M")}
            label="Hombre"
            onChange={() => onChangeRadio("M")}
          ></InputRadio>
          <InputRadio
            checked={checkValue("F")}
            label="Mujer"
            onChange={() => onChangeRadio("F")}
          ></InputRadio>
          <InputCustom
            label="Altura (cm)"
            placeholder="Escribe tu altura"
            name="Height"
            onChange={onChange}
            value={form.Height}
            type="number"
          ></InputCustom>
          <InputCustom
            label="Peso (kg)"
            placeholder="Escribe tu peso"
            name="Weight"
            onChange={onChange}
            value={form.Weight}
            type="number"
          ></InputCustom>
          <InputCustom
            label="Cintura (cm)"
            placeholder="Escribe tu cintura"
            name="Waist"
            onChange={onChange}
            value={form.Waist}
            type="number"
          ></InputCustom>
          <InputCustom
            label="Cuello (cm)"
            placeholder="Escribe tu cuello"
            name="Neck"
            onChange={onChange}
            value={form.Neck}
            type="number"
          ></InputCustom>
          {form.Sex === "F" && (
            <InputCustom
              label="Cadera (cm)"
              placeholder="Escribe tu cadera"
              name="Hip"
              onChange={onChange}
              value={form.Hip}
              type="number"
            ></InputCustom>
          )}
          <div className="mt-4">
            <button
              className="btn btn-primary-cs"
              disabled={disabledButton()}
              type="submit"
            >
              Calcular
            </button>
            <button
              className="btn btn-secondary-cs"
              type="button"
              onClick={cleanState}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-lg-4 mx-auto px-4 ">
        {results.BFP || results.SI ? (
          <Calification {...results}></Calification>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
