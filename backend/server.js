const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors()); 

app.get("/api/questions", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    res.json(response.data); 
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(2000, () => console.log("Proxy server running on port 2000"));
