import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const totalSpots = 50;

    const { count, error } = await supabase
      .from("leads")
      .select("*", { count: "exact", head: true });

    if (error) {
      console.error("Supabase count error:", error);
      return NextResponse.json({ totalSpots, takenSpots: 0 });
    }

    const takenSpots = Math.min(count || 0, totalSpots);

    return NextResponse.json({
      totalSpots,
      takenSpots,
      remainingSpots: totalSpots - takenSpots,
    });
  } catch (error) {
    console.error("Spots API error:", error);
    return NextResponse.json({ totalSpots: 50, takenSpots: 0 });
  }
}
