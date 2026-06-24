import express from "express";
import { healthRoutes} from "./routes/health.routes";
import { welcomeRoutes } from "./routes/welcome.routes";
import { studentsRoutes } from "./routes/students.routes";


const app = express();

app.use(express.json());
app.use(welcomeRoutes);
app.use(healthRoutes);
app.use(studentsRoutes);

app.listen(3000, () => {
  console.log("Server running: PORT 3000");
});