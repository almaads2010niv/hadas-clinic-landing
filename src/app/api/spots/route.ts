import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Night sale starts: Feb 25, 2026 at 20:00 Israel time (UTC+2)
const NIGHT_START = new Date("2026-02-25T18:00:00Z").getTime();

export async function GET() {
  try {
    const isNight = Date.now() >= NIGHT_START;
    const totalSpots = isNight ? 25 : 50;

    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Supabase count error:", error);
      return NextResponse.json({ totalSpots, takenSpots: 0 });
    }

    const minRemaining = 4;
    const maxTaken = totalSpots - minRemaining;
    const takenSpots = Math.min(count || 0, maxTaken);

    return NextResponse.json(
      {
        totalSpots,
        takenSpots,
        remainingSpots: totalSpots - takenSpots,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=30, stale-while-revalidate=60",
        },
      }
    );
  } catch (error) {
    console.error("Spots API error:", error);
    const fallbackTotal = Date.now() >= NIGHT_START ? 25 : 50;
    return NextResponse.json({ totalSpots: fallbackTotal, takenSpots: 0 });
  }
}
