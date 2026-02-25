import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();

    const name = data.get("name");
    const phoneRaw = data.get("phone");
    const services = data.get("services");
    const experience = data.get("experience");
    const description = data.get("description");

    // ✅ Нормалізація телефону
    const cleanPhone = phoneRaw.replace(/[^\d+]/g, "");

    /* ================= EMAIL ================= */

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
      from: `"Заявка від майстра" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_EMAIL,
      subject: `Нова заявка від майстра — ${services}`,

      // ✅ TEXT fallback
      text: `
Імʼя: ${name}
Телефон: ${cleanPhone}
Напрям: ${services}
Досвід: ${experience}

Про себе:
${description}
`,

      // ✅ HTML (клікабельний телефон)
      html: `
        <h2>Нова заявка від майстра</h2>
        <p><b>Імʼя:</b> ${name}</p>
        <p><b>Телефон:</b> <a href="tel:${cleanPhone}">${phoneRaw}</a></p>
        <p><b>Напрям:</b> ${services}</p>
        <p><b>Досвід:</b> ${experience}</p>
        <p><b>Про себе:</b><br/>${description}</p>
      `,
    });

    /* ================= TELEGRAM ================= */

    const telegramText = `
👷 <b>Нова заявка від майстра</b>

👤 <b>Імʼя:</b> ${name}
📞 <b>Телефон:</b> ${cleanPhone}
🛠 <b>Напрям:</b> ${services}
📊 <b>Досвід:</b> ${experience}

📝 <b>Про себе:</b>
${description}
`;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramText,
          parse_mode: "HTML",
        }),
      }
    );

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("MASTERS API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}