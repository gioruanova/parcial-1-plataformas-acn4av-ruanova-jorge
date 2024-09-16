import { usuariosList } from "../database/usuarios.js";

let inputUser = document.querySelector("#username");
let inputPassword = document.querySelector("#password");
const submitButton = document.querySelector("#submitLogin");

// validar si hay usuario loguead
function valiarUsuarioLogueado() {
  if (sessionStorage.getItem("userLog")) {
    window.location.href = "pages/panelPrincipal.html";
  } else {
    submitButton.addEventListener("click", handleLoginClick);
  }
}

// manejo de login
function handleLoginClick(e) {
  e.preventDefault();
  const username = inputUser.value;
  const password = inputPassword.value;

  if (username === "") {
    alert("Debe ingresar un nombre de usuario");
  } else if (password === "") {
    alert("Debe ingresar su contraseña");
  } else {
    validarUser(username, password);
  }
}

// validacion user
function validarUser(username, password) {
  const usuario = usuariosList.find(
    (user) => user.dni === username && user.password === password
  );

  if (usuario) {
    sessionStorage.setItem("userLog", usuario.id);
    window.location.href = "pages/panelPrincipal.html";
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
}

// funciones
valiarUsuarioLogueado();
