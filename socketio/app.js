const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketio(server);


// Configuração de Middlewares
const configureMiddleware = require("./config/middleware");
configureMiddleware(app);

io.on("connection", (socket) => {
    console.log("Usuário conectado: " + socket.id);
  
    socket.on("message", (msgData) => {
      // Recebe um objeto { username: 'nome', message: 'mensagem' }
      console.log(`${msgData.username}: ${msgData.message}`);
      
      // Emite a mensagem para todos os clientes, incluindo o nome do usuário
      io.emit("message", msgData);
    });
  });

// Roteadores
const chatRoutes = require("./routes/chat");
const openaiRoutes = require("./routes/openai");

// Configuração de rotas
app.use("/chat", chatRoutes);
app.use("/openai", openaiRoutes);

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Gerenciar conexões WebSocket
const socketHandler = require("./sockets/messageHandler");
socketHandler(io);

// Rota principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html"));
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "public/chat.html"); // Verifique o caminho completo aqui
});
  
// Inicializar o servidor
const PORT = 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
