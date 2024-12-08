const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/chat", async (req, res) => {
    const userMessage = req.body.message;

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
        res.json({ response: botResponse });
    } catch (error) {
        console.error("Erro ao chamar a API da OpenAI:", error);
        res.status(500).json({ error: "Erro ao gerar resposta" });
    }
});

module.exports = router;
