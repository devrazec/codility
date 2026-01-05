import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Node Start Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 80px auto;
            background: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          h1 {
            margin-top: 0;
          }
          code {
            background: #eee;
            padding: 4px 6px;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 Express Server</h1>
          <p>Your server is up and running.</p>
          <p>
            Start building your endpoints in <code>app.ts</code>.
          </p>
          <ul>
            <li><code>GET /</code> – Start page</li>
            <li><code>POST /api</code> – Your future API</li>
          </ul>
        </div>
      </body>
    </html>
  `);
});

export default app;
