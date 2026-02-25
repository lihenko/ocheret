import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { type, name, phone, city, message } = await req.json();

    const text = `
📩 Нова заявка (${type})

👤 Імʼя: ${name}
📞 Телефон: ${phone}
📍 Місто: ${city}
📝 Повідомлення:
${message || '—'}
`;

    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!res.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to send telegram' },
      { status: 500 }
    );
  }
}