# 🎵 Bot de Música com Lavalink — Discord.js V14

Bot de música para Discord, construído com **Discord.js V14** e **Vulkava** (client Lavalink), com suporte a reprodução via SoundCloud.

## 🚀 Tecnologias

- [Discord.js](https://discord.js.org/) v14
- [Vulkava](https://github.com/vulkavajs/vulkava) — client Lavalink para Node.js
- [Lavalink](https://github.com/lavalink-devs/Lavalink) — servidor de áudio
- [@distube/soundcloud](https://www.npmjs.com/package/@distube/soundcloud) — plugin de suporte ao SoundCloud
- [@discordjs/voice](https://discordjs.guide/voice/) — conexão de voz

## 📋 Pré-requisitos

Antes de rodar o bot, você precisa ter:

1. **Node.js** instalado (recomendado v18+)
2. Um **servidor Lavalink** rodando (local ou remoto) — o bot se conecta a ele para tocar o áudio. Veja como configurar em [lavalink-devs/Lavalink](https://github.com/lavalink-devs/Lavalink)
3. Uma **aplicação/bot criado no [Discord Developer Portal](https://discord.com/developers/applications)**, com o token de acesso em mãos

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/thbbsa/Bot-De-Musica-Com-Lavalink-Discord.js-V14.git

# Entre na pasta
cd Bot-De-Musica-Com-Lavalink-Discord.js-V14

# Instale as dependências
npm install
```

## 🔧 Configuração

1. Abra o arquivo `config.json` e adicione o token do seu bot:

```json
{
  "token": "SEU_TOKEN_AQUI"
}
```

2. Configure os dados de conexão com o seu servidor Lavalink (host, porta, senha) — verifique o arquivo dentro da pasta `Vulkava/` ou `lavalink/` para os detalhes de onde essa configuração deve ser feita no projeto.

⚠️ **Nunca suba seu token ou credenciais reais para o GitHub.** Adicione `config.json` ao `.gitignore` caso ele contenha dados sensíveis, e deixe apenas um exemplo (`config.example.json`) no repositório.

## ▶️ Como rodar

```bash
node index.js
```

## 📁 Estrutura do projeto
├── Comandos/Utilidades/   → comandos utilitários do bot
├── Vulkava/                → configuração do client Lavalink
├── events/                 → eventos do Discord.js
├── handler/                → carregador de comandos/eventos
├── lavalink/                → configurações relacionadas ao servidor Lavalink
├── BaseComandos.js          → base/estrutura para os comandos
├── config.json              → configurações do bot (token, etc)
└── index.js                 → ponto de entrada do bot

## 📝 Licença

Este projeto é livre para fins de estudo.
