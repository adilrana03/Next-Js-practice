import { NextResponse } from 'next/server';
import { user } from '../../../../../util/db';
export function GET(req, res) {
      const data = user;
      const userData = data.filter((e) => e.id == res.params.userid)
      console.log(userData);
      return NextResponse.json(userData.length == 0 ? { result: "No Data Foud", success: false } : { result: userData, status: true }, { status: 200 })
}