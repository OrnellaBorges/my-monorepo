FROM node:lts-alpine

# Créer le dossier de l'app
WORKDIR /app

# Copier les fichiers de config
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install

# Copier le code source
COPY src ./src

# Lancer le backend
CMD ["npx", "ts-node-dev", "src/index.ts"]
