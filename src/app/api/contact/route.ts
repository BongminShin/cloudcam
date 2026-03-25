import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { name, email, message, company, phone, topic } = body as {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    company?: unknown;
    phone?: unknown;
    topic?: unknown;
  };

  const nameStr = typeof name === "string" ? name.trim() : "";
  const emailStr = typeof email === "string" ? email.trim() : "";
  const messageStr = typeof message === "string" ? message.trim() : "";
  const companyStr = typeof company === "string" ? company.trim() : "";
  const phoneStr = typeof phone === "string" ? phone.trim() : "";
  const topicStr = typeof topic === "string" ? topic.trim() : "";

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  // TODO: Connect your email provider (SendGrid, Resend, AWS SES, etc.)
  // For now, we validate and log the submission.
  console.log("CloudCam contact submission:", {
    name: nameStr,
    email: emailStr,
    company: companyStr,
    phone: phoneStr,
    topic: topicStr,
    message: messageStr,
  });

  return NextResponse.json({ ok: true });
}

