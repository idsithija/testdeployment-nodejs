import express, { Request, Response } from "express";
import next from "next";
import { ParsedUrlQuery } from "querystring";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: path.join(__dirname, "views") });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Your Express routes go here
  server.get("/custom-route", (req: Request, res: Response) => {
    const query = req.query as ParsedUrlQuery;
    return app.render(req, res, "/custom-page", query);
  });

  // Default route handling by Next.js
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});

export default app;