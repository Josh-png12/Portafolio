import { NextResponse } from "next/server";
import { projects } from "@/data/portfolio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");

  let result = [...projects];

  if (category) {
    result = result.filter((p) => p.category === category);
  }
  if (featured === "true") {
    result = result.filter((p) => p.featured);
  }

  return NextResponse.json(result);
}
