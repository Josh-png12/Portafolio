import { NextResponse } from "next/server";
import { experience } from "@/data/portfolio";

export async function GET() {
  return NextResponse.json(experience);
}
