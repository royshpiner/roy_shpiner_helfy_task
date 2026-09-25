
const express = require("express");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
