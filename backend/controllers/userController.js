import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createJwtToken } from "../utils/createJwtToken.js";

class UserController {
  //user registration...........................................................................
  static async registerUser(req, res) {
    try {
      const { name, email, password, dob } = req.body;
      
      if (!name || !email || !password || !dob) {
        throw new Error("Fields must not be empty");
      }

      const emailExist = await userModel.findOne({ email });

      if (emailExist) {
        throw new Error("Email already in use");
      }

      //encrypting password
      const salt = await bcrypt.genSalt(Number(process.env.SALT_VALUE));
      const hash = await bcrypt.hash(password, salt);

      const newUser = new userModel({
        name,
        email,
        dob,
        password: hash,
      });

      await newUser.save();

      res.status(201).json({
        name,
        email,
        dob,
        token: createJwtToken(newUser._id),
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //login user...................................................................................
  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error("Fields must not be empty");
      }

      const user = await userModel.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      const pass = await bcrypt.compare(password, user.password);

      if (!pass) {
        throw new Error("User not found");
      }

      res.status(200).json({
        name: user.name,
        email: user.email,
        dob: user.dob,
        token: createJwtToken(user._id),
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export { UserController };
