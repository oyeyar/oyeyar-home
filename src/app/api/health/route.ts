import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({
    success: true,
    message: 'Application is healthy',
    timestamp: new Date().toISOString(),
  });
}
