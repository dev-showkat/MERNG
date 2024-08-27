import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import { connectDB } from "./config/db.js";

config();
connectDB();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Server is Running on PORT: ${port}`));
