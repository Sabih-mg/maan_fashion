import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const form = await request.formData();
  const required = ["name","phone","city","address"];
  for (const key of required) if (!String(form.get(key) || "").trim()) {
    return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: "Store setup is incomplete. DATABASE_URL is not configured." }, { status: 503 });
  }
  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`CREATE TABLE IF NOT EXISTS orders (
      id BIGSERIAL PRIMARY KEY,
      customer_name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT,
      city TEXT NOT NULL,
      address TEXT NOT NULL,
      notes TEXT,
      payment_method TEXT NOT NULL DEFAULT 'Cash on Delivery',
      status TEXT NOT NULL DEFAULT 'Pending',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`;
    const rows = await sql`
      INSERT INTO orders (customer_name, phone, email, city, address, notes)
      VALUES (${String(form.get("name"))}, ${String(form.get("phone"))},
      ${String(form.get("email") || "")}, ${String(form.get("city"))},
      ${String(form.get("address"))}, ${String(form.get("notes") || "")})
      RETURNING id
    `;
    return new Response(`<main style="font-family:Arial;padding:40px"><h1>Thank you!</h1><p>Your COD order request #${rows[0].id} has been received.</p><a href="/">Return to MAAN FASHION</a></main>`, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {
    return NextResponse.json({ error: "Could not save your order. Please try again later." }, { status: 500 });
  }
}
