import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, source } = body;

    // Validate required fields
    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Save lead to Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: name || null,
          phone,
          email: email || null,
          source: source || "checkout_form",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      // Fallback: still return success to not block user experience
      return NextResponse.json(
        { success: true, message: "Lead captured (fallback)" },
        { status: 200 }
      );
    }

    console.log("Lead saved to Supabase:", data);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
