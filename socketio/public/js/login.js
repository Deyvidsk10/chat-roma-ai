document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém o nome de usuário
    const username = document.getElementById("username").value;

    // Armazena o nome de usuário no localStorage
    localStorage.setItem("username", username);

    // Redireciona para o chat
    window.location.href = "chat.html";
});