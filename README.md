# Hiring Fullstack Todo

Fullstack Todo application with:

- Frontend: React + Vite (`client`)
- Backend: Express + MongoDB (`server`)

## Project structure

- `client` - UI application
- `server` - REST API + MongoDB integration

## Quick start (run full stack locally)

## 1) Start backend

```bash
cd server
npm install
```

Create `server/.env`:

```env
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
```

Run backend:

```bash
npm run dev
```

## 2) Start frontend

Open another terminal:

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_SERVER_API_URL=http://localhost:3000/api
```

Run frontend:

```bash
npm run dev
```

Frontend default URL: `http://localhost:5173`

## API base URL

Frontend calls backend using `VITE_SERVER_API_URL`. Default expected value for local development:

`http://localhost:3000/api`

## Important notes / assumptions

- MongoDB must be reachable from the backend process.
- Backend CORS is currently configured for `http://localhost:2000`.
- Frontend requests are sent with credentials enabled.
- You may need to align frontend origin and backend CORS settings for your local setup.

## More details

- Frontend docs: `client/README.md`
- Backend docs: `server/README.md`
