document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí puedes agregar el código para enviar el formulario
        // Por ejemplo, utilizando fetch() para enviar los datos del formulario a un servidor
    });
});
