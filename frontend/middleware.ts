import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";
  const user = req.cookies.get("user")?.value
    ? JSON.parse(req.cookies.get("user")!.value)
    : null;

  const url = req.nextUrl.pathname;

  // Protect /admin routes
  if (url.startsWith("/admin")) {
    if (!token || !user || user.role !== "admin") {
      return NextResponse.json(
        { message: "Access Denied: Admins only" },
        { status: 403 }
      );
    }
  }

  return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
