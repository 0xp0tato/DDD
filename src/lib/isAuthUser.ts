import { type NextRequest } from "next/server";
import * as jose from "jose";

export async function isAuthUser(request: NextRequest) {
  const jwtToken = request.cookies.get("token")?.value;

  if (!jwtToken) return false;

  const jwtConfig = {
    secret: new TextEncoder().encode(process.env.JWT_SECRET),
  };

  try {
    const extractUserInfo = await jose.jwtVerify(jwtToken, jwtConfig.secret);
    if (!extractUserInfo) return false;

    return true;
  } catch (error) {
    console.log("Could not verify user", error);
    return false;
  }
}
