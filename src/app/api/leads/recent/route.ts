import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("name, created_at")
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Supabase recent leads error:", error);
      return NextResponse.json({ leads: [] });
    }

    // Return only first names for privacy
    const leads = (data || []).map((lead) => ({
      name: lead.name ? lead.name.split(" ")[0] : "מישהו",
      created_at: lead.created_at,
    }));

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Recent leads API error:", error);
    return NextResponse.json({ leads: [] });
  }
}
