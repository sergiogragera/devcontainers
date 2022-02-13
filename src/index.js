import express from "express";

const app = express();

app.use('/', (req, res) => {
  res.send('Hello, world!')
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
})

export default app;