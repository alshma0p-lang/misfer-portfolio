import { NextRequest, NextResponse } from "next/server";

// Simple contact form handler. Accepts POST with JSON body containing
// name, email, subject and message. Currently logs the request to
// console and returns a success response. In a real implementation
// this could forward the message to an email service or database.

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ success: false, error: "Invalid submission" }, { status: 400 });
    }
    console.log("Contact submission:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to parse request" }, { status: 400 });
  }
}
