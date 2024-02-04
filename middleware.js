import { NextResponse } from 'next/server';

export async function middleware({ nextUrl }) {
  const response = NextResponse.next();
  if(!nextUrl?.href?.includes("_next")){
    console.log(nextUrl.href);
  }
  return response;
}