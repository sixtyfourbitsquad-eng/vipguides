import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const url = process.env.SECRET_AD_LINK || "https://wa.me/447848182480";
  return NextResponse.redirect(url, 302);
}
