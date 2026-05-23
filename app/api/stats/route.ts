import { NextResponse } from "next/server";
import { stats, projects, experience } from "@/data/portfolio";

export async function GET() {
  return NextResponse.json({
    ...stats,
    featuredProjects: projects.filter((p) => p.featured).length,
    totalProjects: projects.length,
    categories: [...new Set(projects.map((p) => p.category))],
    experienceEntries: experience.length,
  });
}
