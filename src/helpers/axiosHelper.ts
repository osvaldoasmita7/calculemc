import axios from "axios";
import { iAxiosParams } from "../interfaces";

export const AxiosHelper = async ({
  url,
  type = "get",
  data = {},
  onSuccess = (response) => {},
  onError = (error) => {},
}: iAxiosParams) => {

  
  var config = {
    method: type,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  return await axios(config)
    .then(function (response: any) {
  
  return onSuccess(response);
    })
    .catch(function (error: any) {
  
  console.log("error", error);
      console.log("errorMessage", error.message);

      let message =
        error.message === "Network Error"
          ? "Tenemos problemas con nuestro servidor de datos, estamos trabajando para restablecer la conexión, intenta más tarde. O revisa tu conexión a internet."
          : error.response.data.msg
          ? error.response.data.msg
          : "Ha ocurrido un error inesperado, intenta más tarde.";
      return onError(message);
    });
};
