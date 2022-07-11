const express = require("express");
const path = require("path");


const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    // Any path url go back to index.html
    // console.log(path.resolve(__dirname, "frontend", "index.html"))
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server dang chay..."));