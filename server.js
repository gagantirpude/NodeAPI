//import
import { app } from "./app.js";
import connectDB from "./data/database.js";

//connected Database
connectDB();

//
// console.log("From Config ENV files:>> ", process.env.PORT);
//Listen
app.listen(process.env.PORT, () => {
  console.log(`Server is Working`);
});
