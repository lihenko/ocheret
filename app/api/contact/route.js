import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();

    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";        // <---- додано
    const message = data.get("message") || "";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    await transporter.sendMail({
      from: `"Контактна форма Очерет" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_EMAIL,
      subject: `Нове повідомлення з контактної форми: ${name}`,
      text: `
Імʼя: ${name}
Телефон: ${phone}       
Email: ${email}

Повідомлення:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}