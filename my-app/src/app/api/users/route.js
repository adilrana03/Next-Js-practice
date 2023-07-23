import { NextResponse } from 'next/server';
import { user } from '../../../../util/db';
export function GET() {
      const data = user;
      return NextResponse.json(data, { status: 200 });
      console.log(data)
}