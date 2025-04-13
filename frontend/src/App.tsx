//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>

      <main className="mt-8">
        <h1 className="text-4xl font-bold">🌱 Eco-challenges</h1>

        <section className="mt-6">
          <h2 className="text-3xl font-semibold">🚀 Start here</h2>
          <ul className="list-disc pl-8 mt-4">
            <li>
              Copy <code>env.example</code> to <code>.env.dev</code> and fill
              out env variables
            </li>
            <li>
              Run command : <code>make start</code> if using make file or:{" "}
              <code>
                docker compose -f compose.dev.yaml --env-file .env.dev up
                --build
              </code>
            </li>
            <li>
              Seed the database : <code>make seed</code> or{" "}
              <code>docker exec -it backend-eco sh -c "npm run seed"</code>
            </li>
            <li>
              Generate GraphQL queries with codegen : <code>make codegen</code>{" "}
              or <code>cd ./frontend && npm run codegen</code>
            </li>
            <li>
              You can check out the{" "}
              <a href="Makefile" className="text-blue-600">
                Makefile
              </a>{" "}
              commands to run quick actions
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">🛠️ Tech stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="text-2xl font-semibold">🖼️ Frontend</h3>
              <ul className="list-disc pl-8 mt-2">
                <li>
                  React 19 - JavaScript library for building user interfaces
                </li>
                <li>TypeScript - Static type checking</li>
                <li>Vite - Next generation frontend tooling</li>
                <li>TailwindCSS v4 - Utility-first CSS framework</li>
                <li>Apollo Client - GraphQL client</li>
                <li>
                  Shadcn/ui : UI Components toolkit, based on Radix UI and
                  Tailwind CSS
                </li>
                <li>Radix UI - Unstyled, accessible UI components</li>
                <li>React Router - Client-side routing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">💽 Backend</h3>
              <ul className="list-disc pl-8 mt-2">
                <li>Node.js - JavaScript runtime</li>
                <li>TypeScript - Static type checking</li>
                <li>Apollo Server - GraphQL server</li>
                <li>TypeORM - ORM for TypeScript and JavaScript</li>
                <li>PostgreSQL - Open source relational database</li>
                <li>
                  Type-GraphQL - Create GraphQL schema and resolvers with
                  TypeScript
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">⚙️ Development Tools</h2>
          <ul className="list-disc pl-8 mt-4">
            <li>ESLint - JavaScript/TypeScript linting</li>
            <li>Prettier - Code formatting</li>
            <li>Docker - Containerization</li>
            <li>
              GraphQL Codegen - Generate TypeScript types from GraphQL schema
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">🔨 Useful extensions</h2>
          <ul className="list-disc pl-8 mt-4">
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                className="text-blue-600"
              >
                ESLint
              </a>{" "}
              - JavaScript/TypeScript linting
            </li>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                className="text-blue-600"
              >
                Prettier
              </a>{" "}
              - Code formatting
            </li>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql"
                className="text-blue-600"
              >
                GraphQL: Language Feature Support
              </a>{" "}
              - GraphQL LSP
            </li>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax"
                className="text-blue-600"
              >
                GraphQL: Syntax Highlighting
              </a>{" "}
              - GraphQL syntax highlighting
            </li>
            <li>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"
                className="text-blue-600"
              >
                Tailwind CSS IntelliSense
              </a>{" "}
              - Tailwind CSS tooling
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-semibold">💡 Useful info</h2>
          <h3 className="text-2xl font-semibold">🌱 Create a new seeder</h3>
          <p className="mt-4">
            - Create a <code>&lt;pluralEntityName&gt;.seed.json</code> file in{" "}
            <code>backend/src/database/seeds/</code> that matches the entity you
            want to seed
          </p>
          <p className="mt-2">
            - Import and export it in{" "}
            <code>backend/src/database/seeds/index.ts</code>
          </p>
          <p className="mt-2">- Follow this structure:</p>
          <pre className="bg-gray-200 p-4 rounded-md mt-2">
            {`{
  "pluralEntityName": [
    {
      "field1": "someData",
      "field2": "94538032"
    }
  ]
}`}
          </pre>
          <p className="mt-4">
            - Go to <code>backend/src/database/seeder.ts</code>- Import it using
            the TypeScript import alias <code>@/database/seeds</code>- Find the
            line <code>// Add your seeds here</code> and paste your seeding
            instruction at the end of existing ones:
          </p>
          <pre className="bg-gray-200 p-4 rounded-md mt-2">
            {`await seedEntity(EntityName, entityData.pluralEntityName, [
  'date_start',
  'date_end',
]);`}
          </pre>
          <p className="mt-4">
            🎉 You can now run the seed command to add your new seeding data!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
