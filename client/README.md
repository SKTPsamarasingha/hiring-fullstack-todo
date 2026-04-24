# Frontend (Client)

React + Vite frontend for the Todo app.

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm (comes with Node.js)
- Running backend API

## Setup

1. Open a terminal in `client`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `client` with:

   ```env
   VITE_SERVER_API_URL=http://localhost:3000/api
   ```

## Run the app

Start the Vite dev server:

```bash
npm run dev
```

By default, Vite runs on `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

## Assumptions and limitations

- The frontend expects the backend base URL from `VITE_SERVER_API_URL`.
- The backend must allow CORS from your frontend origin (the current backend config uses `http://localhost:2000`).
- API requests use `withCredentials: true`, so cross-origin cookie behavior depends on browser and backend cookie settings.
- No frontend test scripts are currently configured in `package.json`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
