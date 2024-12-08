document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");
    const senhaInput = document.getElementById("senha");
    const confirmarSenhaInput = document.getElementById("confirmar-senha");

    form.addEventListener("submit", (event) => {
        if (senhaInput.value !== confirmarSenhaInput.value) {
            event.preventDefault();
            alert("As senhas não coincidem. Por favor, tente novamente.");
        }
    });
});
