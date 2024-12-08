
    const socket = io("https://fantastic-fiesta-x596q44jg4qvh9qrg-3000.app.github.dev/");

    // Recupera o nome de usuário do localStorage
    const username = localStorage.getItem("username");

    socket.on("connect", () => {
        console.log("Usuário Conectado ao servidor");
    });

    socket.on("message", (msgData) => {
        const ul = document.getElementById("messages");
        const li = document.createElement("li");

        // Define o estilo da mensagem dependendo do remetente
        if (msgData.username === username) {
            li.className = "sent";
        } else {
            li.className = "received";
        }

        // Exibe a mensagem com o nome do usuário
        li.innerHTML = `<strong>${msgData.username}</strong>: ${msgData.message}`;
        ul.appendChild(li);
    });

    function enviar() {
        let msgInput = document.getElementById("msgInput");
        let message = msgInput.value.trim(); // Remove espaços em branco no início e fim

        // Verifica se o campo de mensagem está vazio antes de enviar
        if (message) {
            // Envia um objeto contendo o nome do usuário e a mensagem
            socket.emit("message", { username: username, message: message });
            msgInput.value = ""; // Limpa o campo após o envio
        }
    }

    document.getElementById("msgInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            enviar();
        }
    });