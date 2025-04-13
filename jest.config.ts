import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',  // Si tu testes côté backend, sinon utilise 'jsdom' pour le frontend
  moduleNameMapper: {
    // Exemple de mappage d'extensions de fichiers ou de modules
    '^@frontend/(.*)$': '<rootDir>/frontend/$1',
    '^@backend/(.*)$': '<rootDir>/backend/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',  // Indique à Jest d'utiliser ts-jest pour les fichiers TypeScript
  },
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],  // Recherche des fichiers de tests avec les extensions .ts et .tsx
};

export default config;
