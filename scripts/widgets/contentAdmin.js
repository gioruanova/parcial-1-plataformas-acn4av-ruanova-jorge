export function crearAdmin(nav, nombre, apellido) {
    console.log('Soy admin');
    
  nav.innerHTML = `
      <div class="main-header">
        <a href="/pages/panelPrincipal.html" class="header-logo"></a>
        <div class="user-info">
            <span>${nombre}</span>
            <span>${apellido}</span>
            <span>Admin</span>
        </div>
    </div>
    <ul class="nav-items">
        <li>
            <a href="/pages/panelPrincipal.html">Inicio</a>
        </li>
        <li>
            <a href="#">Usuarios</a>
        </li>
        <li>
            <a href="#">Medicos</a>
        </li>
        <li>
            <a href="#">Turnos</a>
        </li>
        <li>
            <a href="" id="logoff">Salir</a>
        </li>
    </ul>
    `;
}
