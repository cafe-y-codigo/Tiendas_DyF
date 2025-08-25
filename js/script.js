//Btn Hambuguesa (NavBar)
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
const subToggles = document.querySelectorAll('.sub-toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

//Cerrrar menu
menu.querySelector('.bi-list').addEventListener('click', () => {
    menu.classList.remove('open');
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('open');
    }
});


subToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const submenu = btn.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});


//====== Validar Login ======\\
function validarLogin(URL) {
  const usuario = document.getElementById("usuario").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();

  //Usuaio Registrado
  const usuarioValido = "Usuario";
  const contraseñaValida = "12345";

  if (usuario === usuarioValido && contraseña === contraseñaValida) {
    // Redirige a la página de cuenta
    window.location.href = URL;
  } else {
    alert("Usuario o contraseña incorrectos.");
    return false;
  }
}

//Cerrar Sesión
function cerrarSesion() {
  window.location.href = '../index.html';
}



