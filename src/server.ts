import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./docs/swagger";
import { healthRoutes} from "./routes/health.routes";
import { studentsRoutes } from "./routes/students.routes";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(healthRoutes);
app.use(studentsRoutes);


app.listen(3000, () => {
  console.log("Server running: PORT 3000");
});