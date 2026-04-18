import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = join(process.cwd(), "assets", "overlay.png");
  const buf = await readFile(filePath);
  return new NextResponse(buf, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
