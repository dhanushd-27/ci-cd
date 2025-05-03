import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! from CI/CD pipeline... Hello Again');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});