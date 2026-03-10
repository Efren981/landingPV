const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

navAnchors.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


// Inicializar EmailJS
emailjs.init("xOD1om8zynV5PPVIF");

// Escuchar el envío del formulario
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const templateParams = {
            name: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            message: document.getElementById("mensaje").value,
            title: "Nuevo mensaje desde la web",
            time: new Date().toLocaleString("es-MX")
        };


        emailjs.send("service_dyotvcd", "template_42464hn", templateParams)
            .then(function () {
                status.innerHTML = "Mensaje enviado correctamente.";
                form.reset();
            })
            .catch(function (error) {
                status.innerHTML = "Error al enviar el mensaje.";
                console.error("EmailJS error:", error);
            });

    });

});