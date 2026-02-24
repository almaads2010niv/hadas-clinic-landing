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

    // Save lead to Supabase with pending_payment status
    const { data, error } = await supabase
      .from("leads")
      .insert([
        {
          name: name || null,
          phone,
          email: email || null,
          source: source || "checkout_form",
          status: "pending_payment",
        },
      ])
      .select("id");

    if (error) {
      console.error("Supabase insert error:", error);
      // Fallback: still return success to not block user experience
      return NextResponse.json(
        { success: true, message: "Lead captured (fallback)", leadId: null },
        { status: 200 }
      );
    }

    const leadId = data?.[0]?.id || null;
    console.log("Lead saved to Supabase:", leadId);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        leadId,
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
