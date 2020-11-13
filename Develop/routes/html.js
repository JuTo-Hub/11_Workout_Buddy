const path = require("path");
  
app.get("/stats", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  
  });
  app.get("/exercise", ({ body }, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });