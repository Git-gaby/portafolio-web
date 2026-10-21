document.addEventListener("DOMContentLoaded", () => {
  // Cierra automáticamente el navbar al hacer click en un enlace en móviles
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // Mensaje en consola para reclutadores o profesores curiosos
  console.log(
    "%c Portafolio Gabriel Gómez %c Sistemas & Ciberseguridad ",
    "background: #0d6efd; color: white; font-weight: bold; padding: 4px;",
    "background: #111; color: #0dcaf0; font-weight: bold; padding: 4px;"
  );
});