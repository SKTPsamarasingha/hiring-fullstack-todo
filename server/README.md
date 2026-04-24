# Backend (Server)

Express + MongoDB backend API for the Todo app.

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm
- MongoDB instance local 

## Setup

1. Open a terminal in `server`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in `server` with:

   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=3000
   ```

## Run the backend

Development mode (with auto-restart):

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The API is mounted under `/api` (for example: `GET /api/todos`).

## MongoDB connection notes

- MongoDB connection is initialized at startup using `MONGODB_URI`.
- If the connection fails, the process exits with code `1`.
- The app logs MongoDB connection errors and disconnect events.
- On `SIGINT` (Ctrl+C), the MongoDB connection is closed gracefully.
- Ensure your MongoDB user/network access is configured correctly if using Atlas.

## Assumptions and limitations

- `MONGODB_URI` is required; the backend will not start without a valid value.
- CORS is currently configured to allow only `http://localhost:2000`.
- `NODE_ENV` is hardcoded as `"development"` in config, regardless of environment variables.
- No dedicated backend test script is currently defined in `package.json`.
