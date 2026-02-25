import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.formData();

    const city = data.get("city");
    const district = data.get("district");
    const name = data.get("name");
    const phoneRaw = data.get("phone");
    const service = data.get("service");
    const description = data.get("description");

    // ✅ ЧИСТИЙ ТЕЛЕФОН (для клікабельності)
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
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Заявка з сайту" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_EMAIL,
      subject: `Нова заявка — ${service} (${city})`,

      // ✅ TEXT fallback (БЕЗ HTML)
      text: `
Місто: ${city}
Район: ${district}
Імʼя: ${name}
Телефон: ${cleanPhone}
Послуга: ${service}

Що потрібно зробити:
${description}
`,

      // ✅ HTML (КЛІКАБЕЛЬНИЙ ТЕЛЕФОН)
      html: `
        <h2>Нова заявка з сайту</h2>
        <p><b>Місто:</b> ${city}</p>
        <p><b>Район:</b> ${district}</p>
        <p><b>Імʼя:</b> ${name}</p>
        <p><b>Телефон:</b> <a href="tel:${cleanPhone}">${phoneRaw}</a></p>
        <p><b>Послуга:</b> ${service}</p>
        <p><b>Що потрібно зробити:</b><br/>${description}</p>
      `,
    });

    /* ================= TELEGRAM ================= */

    const telegramText = `
📩 <b>Нова заявка з сайту</b>

🏙 <b>Місто:</b> ${city}
📍 <b>Район:</b> ${district}
👤 <b>Імʼя:</b> ${name}
📞 <b>Телефон:</b> ${cleanPhone}
🛠 <b>Послуга:</b> ${service}

📝 <b>Опис:</b>
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
    console.error("ORDER API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}