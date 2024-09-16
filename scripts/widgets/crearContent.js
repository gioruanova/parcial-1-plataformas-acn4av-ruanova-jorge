import { validacionUsuario, desloguearUsuario } from "./validUser.js";
import { usuariosList } from "../database/usuarios.js";

import { crearAdmin } from "./contentAdmin.js";
import { crearUser } from "./contentUser.js";
import { crearMedico } from "./contentMedico.js";

const navegacion = document.getElementById("navegacion-conent");

const user = validacionUsuario();
console.log(user);

if (user) {
  if (user.esAdmin) {
    crearAdmin(navegacion, user.nombre, user.apellido);
  } else {
    if (user.esMedico) {
      crearMedico(navegacion, user.nombre, user.apellido, user.dni);
    } else {
      crearUser(navegacion, user.nombre, user.apellido, user.dni);
    }
  }
} else {
  window.location.href = "/index.html";
}

const logoff = document.getElementById("logoff");

logoff.addEventListener("click", () => {
  desloguearUsuario();
  window.location.href = "/index.html";
});
