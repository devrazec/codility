import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Start Page</title>
      </head>
      <body>
        <h1>🚀 Express Server</h1>
      </body>
    </html>
  `);
});

export default app;
