import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await request.json();

  return NextResponse.json({
    data: `ok for ${JSON.stringify(res, null, 2)}`,
  });
}
