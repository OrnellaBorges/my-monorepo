import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { gql } from "graphql-tag";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "./entities/User";

// Charger .env
dotenv.config();

// TypeORM DataSource
const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [User], // ← ajoute ici l'entité qu'on vient d'importer
});

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    console.log("📦 Connected to the database");

    const app = express();

    const typeDefs = gql`
      type Query {
        hello: String
      }
    `;

    const resolvers = {
      Query: {
        hello: () => "Hello world!",
      },
    };

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    server.applyMiddleware({ app });

    app.listen(4000, () => {
      console.log("🚀 Server running at http://localhost:4000/graphql");
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database", err);
  }
};

startServer();

