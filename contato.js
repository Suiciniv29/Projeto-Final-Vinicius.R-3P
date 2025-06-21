document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação simples
        if(!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validação de e-mail
        if(!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        showLoading();

        setTimeout(function() {
            hideLoading();
            showSuccessMessage();
            contactForm.reset();
        }, 1000);
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showLoading() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true; 
        alert('Solicitação Registrada!');
    }
});
