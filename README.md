# My Monorepo Project

Bienvenue dans le projet **My Monorepo** ! Ce projet est une base pour un monorepo qui contient à la fois un **frontend** et un **backend**, configurés pour être utilisés avec **TypeScript** et **Jest** pour les tests.

## Structure du projet

Le projet est structuré de manière à séparer clairement le **frontend** et le **backend** tout en étant dans un même repository. Il utilise également des outils comme **Docker** pour faciliter le déploiement et l'exécution des conteneurs.

### Frontend

Le frontend est construit avec **React** et utilise **Jest** pour les tests unitaires.

### Backend

Le backend utilise **Node.js** avec **TypeScript** et inclut également des tests avec **Jest** pour assurer la qualité du code.

### Docker

Le projet utilise **Docker** pour faciliter la gestion des conteneurs pour le développement local.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- [Node.js](https://nodejs.org/) (version 16 ou plus récente recommandée)
- [Docker](https://www.docker.com/get-started) (si vous souhaitez utiliser Docker pour les conteneurs)
- [Git](https://git-scm.com/)

## Installation

### Cloner le repository

Clonez ce repository sur votre machine locale :

```bash
git clone https://github.com/OrnellaBorges/my-monorepo.git
cd my-monorepo
```

Installation des dépendances
Ensuite, installez les dépendances pour le frontend et le backend.

Installez les dépendances pour le frontend :

```
bash
cd frontend
npm install
```

Installez les dépendances pour le backend :

```
bash
cd ../backend
npm install
```

Retournez à la racine du projet :

```
cd ..
```

Lancer les services avec Docker (optionnel)
Si vous souhaitez lancer le projet avec Docker, utilisez les commandes suivantes.

Lancer les services (frontend + backend) avec Docker :

```
make up
Arrêter les services Docker :
```

```
make down
```

Nettoyer les conteneurs et les images Docker :

```
make clean

```

Lancer le frontend sans Docker
Si vous souhaitez tester le frontend sans Docker, vous pouvez le faire avec la commande suivante dans le répertoire frontend :

```
npm run dev

```

Cela démarre le serveur de développement pour le frontend.

Lancer le backend sans Docker
De même, pour lancer le backend sans Docker, utilisez la commande suivante dans le répertoire backend :

```
npm run dev

```

Cela démarre le serveur backend.

Tests
Le projet utilise Jest pour effectuer des tests. Voici comment les exécuter.

Lancer les tests pour le frontend :

Dans le répertoire frontend :

```
npm run test

```

```
npm run test

```

Ajouter des tests
Les tests peuvent être ajoutés dans le dossier **tests** pour chaque partie du code (frontend et backend).

Scripts Makefile
Le projet contient plusieurs commandes utiles dans le fichier Makefile pour faciliter le développement et la gestion des conteneurs Docker. Voici un aperçu des commandes disponibles :

up : Démarre les services avec Docker (frontend + backend) et construit les images.

down : Arrête les services Docker.

restart : Redémarre les services Docker (arrête puis redémarre).

clean : Nettoie les conteneurs, images et volumes Docker.

test : Lance les tests (backend ou frontend).

logs : Affiche les logs des conteneurs Docker.

ps : Affiche l’état des conteneurs Docker.

Développement
Le projet est configuré pour permettre un développement fluide avec TypeScript, Jest pour les tests unitaires et Docker pour l'isolation de l'environnement de développement.

Configuration TypeScript
Le projet utilise un fichier tsconfig.json spécifique pour chaque service (frontend et backend).

Le frontend est configuré pour utiliser React et TypeScript.

Le backend utilise Node.js et TypeScript.

Configuration des tests avec Jest
Les tests pour le frontend et le backend sont configurés avec Jest et ts-jest.

Pour le frontend, les tests sont exécutés avec un environnement jest-environment-jsdom pour simuler un navigateur.

Pour le backend, les tests sont exécutés dans un environnement Node.js.

Contribution
Si vous souhaitez contribuer au projet, vous pouvez forker le repository et créer une branche pour vos modifications. N'oubliez pas d'ajouter des tests pour toute nouvelle fonctionnalité que vous ajoutez.

Voici quelques étapes pour contribuer :

Forkez le repository sur GitHub.

Clonez votre fork localement et créez une nouvelle branche pour votre fonctionnalité.

Faites vos modifications et ajoutez des tests si nécessaire.

Ouvrez une Pull Request vers le repository principal.

License
Ce projet est sous MIT License. Voir le fichier LICENSE pour plus de détails.

### Instructions supplémentaires :

- **Déploiement** : Tu peux ajouter une section pour décrire comment déployer le projet sur des environnements de production si tu le souhaites (par exemple, sur Heroku, AWS, ou un autre fournisseur).
- **Améliorations futures** : Si tu as des fonctionnalités à ajouter ou des améliorations en tête, une section dédiée pour les **TODOs** ou **roadmap** pourrait être utile.

Une fois le `README.md` créé et modifié selon tes préférences, tu peux le committer et le pousser sur GitHub pour que les autres puissent le voir.

```bash

```
