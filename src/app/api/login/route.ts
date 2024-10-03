import { loginService } from "@/services/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { username, password } = body;

    if (!username || !password)
      return NextResponse.json(
        { message: "Username or Password is missing", success: false },
        { status: 400 }
      );

    return loginService(username, password);
  } catch (error) {
    console.error("Login error", error);
    return NextResponse.json(
      { message: "Failed to process request", success: false },
      { status: 400 }
    );
  }
}
