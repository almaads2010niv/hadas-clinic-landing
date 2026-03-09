import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const totalSpots = 20;

    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Supabase count error:", error);
      return NextResponse.json({ totalSpots, takenSpots: 0 });
    }

    const minRemaining = 3;
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
    return NextResponse.json({ totalSpots: 20, takenSpots: 0 });
  }
}
