import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthUser } from "./lib/isAuthUser";

export function middleware(request: NextRequest) {
  if (!isAuthUser(request))
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/dashboard",
};
