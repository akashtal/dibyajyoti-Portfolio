import { NextResponse } from "next/server";

export function middleware() {
  const response = NextResponse.next();
  response.headers.set("Accept-CH", "Sec-CH-Prefers-Color-Scheme");
  return response;
}