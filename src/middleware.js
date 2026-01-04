import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  /* ======================
     CASE 1: USER IS LOGGED IN
     → DO NOT ALLOW LOGIN PAGE
  ====================== */
  if (pathname === "/login" && token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  /* ======================
     CASE 2: ADMIN ROUTES
  ====================== */
  if (pathname.startsWith("/admin")) {
    // ❌ Not logged in
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    // ❌ Logged in but not admin
    if (token.usertype !== "2") {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

/* ======================
   MATCHER
====================== */
export const config = {
  matcher: ["/admin/:path*", "/login"],
};
