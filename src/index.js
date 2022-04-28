import app from "./app.js";
import { sequelize } from "./db/database.js";

async function main() {
  const port = 3000;

  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();
