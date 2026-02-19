import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: { rejectUnauthorized: false } // self-signed certificate fix
    });

    await transporter.sendMail({
      from: `"Заявка від майстра" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_EMAIL,
      subject: `Нова заявка від майстра: ${data.get("services")}`,
      text: `
Імʼя: ${data.get("name")}
Телефон: ${data.get("phone")}
Напрям: ${data.get("services")}
Досвід: ${data.get("experience")}

Про себе:
${data.get("description")}
`
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("MASTERS API ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
