import app from "./app.mjs";
import dotenv from "dotenv";

dotenv.config();

import "./config/mqtt.mjs"; 

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
