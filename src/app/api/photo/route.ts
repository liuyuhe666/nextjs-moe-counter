import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const width = searchParams.get('width') ?? 1920;
  const height = searchParams.get('height') ?? 1080;
  const res = await fetch(`https://picsum.photos/${width}/${height}`);
  const blob = await res.arrayBuffer();
  const headers = new Headers();
  headers.set("Content-Type", "image/png");
  return new NextResponse(blob, { status: 200, statusText: "OK", headers });
};