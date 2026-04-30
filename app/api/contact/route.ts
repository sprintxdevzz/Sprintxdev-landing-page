import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Form is not configured. Email info@nxtaut.com directly.' },
      { status: 500 }
    );
  }

  const incoming = await req.formData();

  // Honeypot check — bots fill the hidden website field
  if (incoming.get('website')) {
    return NextResponse.json({ success: true, message: 'OK' });
  }

  const out = new FormData();
  out.append('access_key', accessKey);
  for (const [k, v] of incoming.entries()) {
    if (k === 'access_key' || k === 'website') continue;
    out.append(k, v);
  }
  out.append('subject', 'New contact form submission — nxtaut.com');
  out.append('from_name', 'nxtaut.com contact form');

  try {
    const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: out });
    const data = await r.json();
    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message || 'Submission failed.' },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true, message: 'Message sent.' });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Network error. Try again or email info@nxtaut.com.' },
      { status: 502 }
    );
  }
}
