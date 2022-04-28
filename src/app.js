import express from "express";

// Import routes
import projectsRoutes from "./routes/projects.routes.js";
import workpackagesRoutes from "./routes/workpackages.routes.js"

const app = express();

// middleware
app.use(express.json());

app.use(projectsRoutes);
app.use(workpackagesRoutes);

export default app;
