// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fakeDB from "@/Data/fakeData.json";
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from "next/server";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   res.status(200).json(req);
// }

export const GET = async () => {
  const fakeData = fakeDB;
  return NextResponse.json(fakeData);
}