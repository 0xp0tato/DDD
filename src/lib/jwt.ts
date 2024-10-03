import { IUser } from "@/interface/user";
import jwt from "jsonwebtoken";

export function createJWT(userDetails: IUser) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
  }

  const token = jwt.sign({ userDetails }, secret, { expiresIn: "3d" });

  return token;
}
