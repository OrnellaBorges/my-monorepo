FROM node:lts-alpine

# Créer le dossier
WORKDIR /app

# Installer les dépendances
COPY package*.json ./
RUN npm install

COPY index.html ./
COPY tsconfig*.json ./
COPY vite.config.mjs ./
COPY codegen.ts ./
COPY public/ public/
COPY src/ src/


# Lancer Vite
CMD ["npm", "run", "dev"]
