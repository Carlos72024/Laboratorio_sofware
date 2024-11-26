export function mostrarUsuario() {
    const aliasUsuario = localStorage.getItem('usuarioAlias'); // Obtener el alias
    const userId = sessionStorage.getItem('userId'); // Obtener el ID del usuario

    // Redirigir a la página de inicio si no hay sesión activa
    if (!userId) {
        window.location.href = 'index.html';
    }

    // Mostrar el nombre del usuario
    const usuarioNombre = document.getElementById('usuarioNombre');
    if (usuarioNombre) {
        usuarioNombre.textContent = `Usuario: ${aliasUsuario}`; // Actualiza el contenido
    }
}
