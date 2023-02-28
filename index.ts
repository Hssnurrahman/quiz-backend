import express from "express";
import quizRoutes from "./routes/quizRoutes";
import questionRoutes from "./routes/questionRoutes";
import optionRoutes from "./routes/optionRoutes";

const app = express();
app.use(express.json());

app.use("/api", quizRoutes);
app.use("/api", questionRoutes);
app.use("/api", optionRoutes);

app.listen(4000, () => console.log("Server Running On Port 4000"));
