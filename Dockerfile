# Imagem oficial do Node.js (leve)
FROM node:18-alpine

# Criar pasta dentro do container
WORKDIR /usr/src/app

# Copiar dependências
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm install --only=production

# Copiar o restante do código
COPY . .

# Expor a porta usada no app
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "app.js"]
