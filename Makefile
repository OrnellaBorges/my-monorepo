# 🏗️ Démarrer les services avec Docker Compose (mode développement)
up:
	docker-compose -f compose.dev.yaml up --build

# ⬇️ Arrêter les services avec Docker Compose
down:
	docker-compose -f compose.dev.yaml down

# 🚀 Lancer le backend en local sans Docker (utilise ts-node-dev pour le rechargement automatique)
backend:
	cd backend && npx ts-node-dev src/index.ts

# 🌐 Lancer le frontend en local sans Docker (exécute Vite en mode développement)
frontend:
	cd frontend && npm run dev

# 🔄 Redémarrer les services Docker en reconstruisant les conteneurs
restart:
	docker-compose -f compose.dev.yaml down && docker-compose -f compose.dev.yaml up --build

# 🧹 Nettoyer les conteneurs, images et volumes (⚠️ Attention, cette commande supprime des données !)
clean:
	docker-compose -f compose.dev.yaml down -v --rmi all --remove-orphans

# 🧪 Lancer les tests (aucun test défini pour l'instant)
test:
	echo "Aucun test défini pour l’instant"

# 📄 Afficher les logs des conteneurs avec Docker Compose (dernières 100 lignes)
logs:
	docker-compose -f compose.dev.yaml logs -f --tail=100

# 📊 Afficher l'état des services Docker Compose
ps:
	docker-compose -f compose.dev.yaml ps
