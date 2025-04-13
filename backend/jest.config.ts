import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(test|spec).[jt]s'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // si tu utilises des alias
  },
};

export default config;
