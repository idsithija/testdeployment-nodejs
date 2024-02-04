import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: path.join(__dirname, "views") });

export default app;