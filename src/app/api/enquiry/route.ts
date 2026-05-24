import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  message?: string;
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, company, email, phone, country, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.ENQUIRY_TO ?? "pg02029845@gmail.com";
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `New Enquiry — ${name}${company ? ` (${company})` : ""}`;
  const text = [
    `Name:     ${name}`,
    `Company:  ${company ?? "-"}`,
    `Email:    ${email}`,
    `Phone:    ${phone ?? "-"}`,
    `Country:  ${country ?? "-"}`,
    "",
    "Requirements:",
    message ?? "-",
  ].join("\n");

  const html = `
    <div style="font-family:Inter,Segoe UI,Arial,sans-serif;max-width:600px;margin:0 auto;color:#0a2540">
      <div style="background:#0a2540;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
        <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#9bb8e6">Orbit Diamond Tools</div>
        <div style="font-size:20px;font-weight:700;margin-top:6px">New Enquiry</div>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:0;padding:24px;border-radius:0 0 8px 8px;background:#fff">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#64748b;width:120px">Name</td><td style="padding:8px 0;font-weight:600">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0">${escapeHtml(company ?? "-")}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Phone</td><td style="padding:8px 0">${escapeHtml(phone ?? "-")}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b">Country</td><td style="padding:8px 0">${escapeHtml(country ?? "-")}</td></tr>
        </table>
        <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e2e8f0">
          <div style="font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#2563eb;font-weight:700">Requirements</div>
          <div style="margin-top:8px;white-space:pre-wrap;line-height:1.6">${escapeHtml(message ?? "-")}</div>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Orbit Diamond Tools" <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 502 });
  }
}
