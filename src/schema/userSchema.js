// models/User.js
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // outros campos do usuário, se necessário
}, {
    timestamps: true,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
