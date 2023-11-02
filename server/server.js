import { app } from "./app.js";

const PORT = process.env.PORT ?? 6600

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
