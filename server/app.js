//import files
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

//import all routes from their files
import { frontendRoute } from "./routes/frontendRoute.js";
import { backendRoute } from "./routes/backendRoute.js";
import { funstuffRoute } from "./routes/funstuffRoute.js";
import { uxdesignRoute } from "./routes/uxdesignRoute.js";
import { userRoute } from "./routes/userRoute.js";

dotenv.config();

export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static('public-danny'))

//express your routes and path
app.use("/frontend", frontendRoute);
app.use("/backend", backendRoute);
app.use("/funstuff", funstuffRoute);
app.use("/uxdesign", uxdesignRoute);
app.use("/users", userRoute);
