const axios = require("axios");

module.exports = (io) => {
    io.on("connection", (socket) => {
        console.log("Usuário conectado " + socket.id);

        socket.on("message", async (msg) => {
            if (msg.text.startsWith("/text ")) {
                const userMessage = msg.text.replace("/text ", "");

                try {
                    const response = await axios.post(
                        "https://api.openai.com/v1/chat/completions",
                        {
                            model: "gpt-3.5-turbo",
                            messages: [{ role: "user", content: userMessage }],
                        },
                        {
                            headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
                        }
                    );

                    const botResponse = response.data.choices[0].message.content;
                    io.emit("message", { text: botResponse, sender: "bot" });
                } catch (error) {
                    console.error("Erro ao chamar a API da OpenAI:", error);
                    io.emit("message", { text: "Erro ao gerar resposta", sender: "bot" });
                }
            } else if (msg.text.startsWith("/image ")) {
                const userMessage = msg.text.replace("/image ", "");

                try {
                    const response = await axios.post(
                        "https://api.openai.com/v1/images/generations",
                        { prompt: userMessage, n: 1, size: "1024x1024" },
                        { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
                    );

                    const imageUrl = response.data.data[0].url;
                    io.emit("message", { text: imageUrl, type: "image", sender: "bot" });
                } catch (error) {
                    console.error("Erro ao chamar a API da OpenAI para imagens:", error);
                    io.emit("message", { text: "Erro ao gerar imagem", sender: "bot" });
                }
            } else {
                io.emit("message", msg);
            }
        });
    });
};
