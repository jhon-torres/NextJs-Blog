import { mongoose } from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect("mongodb+srv://<user>:<password>@cluster0.5hkrmls.mongodb.net/") // conexión de mongoDB
    .then(() => console.log("database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
