import connectToDB from "@/lib/dbConnect";
import { createJWT } from "@/lib/jwt";
import Users from "@/models/User";
import { NextResponse } from "next/server";

export async function loginService(username: string, password: string) {
  await connectToDB();

  try {
    const checkUser = await Users.findOne({ username, password });

    if (!checkUser)
      return NextResponse.json(
        { message: "Invalid Username & Password", success: false },
        { status: 400 }
      );

    const jwtToken = createJWT(checkUser);

    return NextResponse.json(
      { message: "User Found", jwtToken, success: true },
      { status: 200 }
    );
  } catch (error) {
    console.log("Login Service Error", error);
  }
}
