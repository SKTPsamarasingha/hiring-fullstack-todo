import dotenv from 'dotenv';

dotenv.config();
export const MONGODB_URI = process.env.MONGODB_URI;
export const NODE_ENV = "development"

export const CORS_OPTIONS = {
    origin: 'http://localhost:2000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
};