import { usuariosList } from "../database/usuarios.js";

let idUsuario;

// Valid user loged
export const validacionUsuario = () => {
  const userRecord = JSON.parse(sessionStorage.getItem("userLog"));
  usuariosList.forEach((usuario) => {
    if (usuario.id === userRecord) {
      idUsuario = usuario;
    }
  });
  return idUsuario;
};


// desloguear usuario
export const desloguearUsuario = () => {
  sessionStorage.removeItem("userLog");
  window.location.href = "/";
};
