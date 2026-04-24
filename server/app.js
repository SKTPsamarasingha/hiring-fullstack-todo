import express from 'express';
import tasksRoutes from "./routes/tasksRoutes.js";
import compression from "compression";
import cookieParser from "cookie-parser";
import {errorHandler, requestHandler} from "./middleware/handlers.js";
import cors from "cors";
import {CORS_OPTIONS} from "./configs/configs.js";
import connectDB from "./configs/mongoDB.js";

await connectDB()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(compression());
app.use(cookieParser());

app.use(cors(CORS_OPTIONS));
app.use(requestHandler);

app.use('/api', tasksRoutes)
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})