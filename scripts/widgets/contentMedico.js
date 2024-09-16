export function crearMedico(nav, nombre, apellido, dni) {
    console.log("Soy medico");
    
    nav.innerHTML = `
    <div class="main-header">
        <a href="/pages/panelPrincipal.html" class="header-logo"></a>
        <div class="user-info">
            <span>${nombre}</span>
            <span>${apellido}</span>
            <span>${dni}</span>
        </div>
    </div>
    <ul class="nav-items">
        <li>
            <a href="/pages/panelPrincipal.html">Inicio</a>
        </li>
        <li>
            <a href="#">Mis Datos</a>
        </li>
        <li>
            <a href="#">Turnos Asignados</a>
        </li>
        <li>
            <a href="" id="logoff">Salir</a>
        </li>
    </ul>
    `;
    }