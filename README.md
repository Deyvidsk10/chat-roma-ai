# Chat-roma-ai

### Objetivo
#### Repositório do projeto de Sistemas Distribuídos - Faculdade Nova Roma: Desenvolvimento de um chatbot utilizando WebSocket e Socket.IO, estamos desenvolvendo um sistema de comunicação em tempo real que integra diversas APIs, incluindo o GPT-4, para gerar imagens, textos e outras funcionalidades. O objetivo é criar uma plataforma capaz de processar linguagem natural e fornecer respostas inteligentes e relevantes.

## Integrantes
- Daniel Holanda
- Luiz Ferraz
- Nathalia Sales
- Rodrigo Nascimento

## Ambiente de desenvolvimento e Versionamento 

- Replit - IDE on-line.<br>
- GitHub - Plataforma de controle de versão, hospedagem, colaboração e gerenciamento

## Guia de Configuração

Este guia ajuda você a configurar o projeto para rodar no ambiente Codespaces com o GitHub.

### 1. Instale as Dependências
No diretório do projeto, instale todas as dependências necessárias executando o comando no terminal:

"npm install"


### 2. Crie uma Conta ou Faça Login no GitHub Codespaces
Acesse [GitHub Codespaces](https://github.com/codespaces) e faça login com sua conta GitHub. Se ainda não tiver uma conta, crie uma para poder utilizar o ambiente de desenvolvimento em nuvem.

### 3. Crie um Codespace a Partir do Repositório Principal
- No repositório GitHub do projeto, selecione a branch `main`.
- Abra o Codespaces clicando em **Code > Open with Codespaces** e crie um novo Codespace com base na branch `main`.

### 4. Configure a URL de Conexão no Arquivo de Cliente
- Após o Codespace ser iniciado, ele gerará uma URL pública para acesso ao projeto.
- Abra o arquivo `chat-socketio.html` e localize a linha com `io.connect`.
- Substitua a URL existente pela URL pública gerada no Codespace. Isso permite que o cliente Socket.IO se conecte corretamente ao servidor.

### 5. Inicie o Servidor
No terminal do Codespace, execute o seguinte comando para iniciar o servidor:
```bash
npm run start-sktio
```

O servidor estará em execução e pronto para uso.



