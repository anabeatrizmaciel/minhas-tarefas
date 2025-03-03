# Usando a imagem base do Node.js (vai instalar o Node.js no contêiner)
FROM node:18

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiando os arquivos de dependências para o contêiner (para instalar as dependências)
COPY package*.json ./

# Instalando as dependências (npm install)
RUN npm install

# Copiando o restante do código do frontend para dentro do contêiner
COPY . .

# Expondo a porta que será utilizada pelo servidor de desenvolvimento
EXPOSE 3000

# Definindo o comando que o contêiner vai rodar quando for iniciado (inicia o servidor de desenvolvimento do React)
CMD ["npm", "run", "dev"]
