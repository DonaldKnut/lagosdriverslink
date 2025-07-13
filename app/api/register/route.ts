import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sanityClient } from "@/lib/sanity";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password, dob } = body;

  if (!name || !email || !password || !dob) {
    return NextResponse.json({ error: "All fields required" }, { status: 400 });
  }

  // Check if user already exists
  const existing = await sanityClient.fetch(
    `*[_type == "user" && email == $email][0]`,
    { email }
  );

  if (existing) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 409 }
    );
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user in Sanity
  await sanityClient.create({
    _type: "user",
    name,
    email,
    password: hashedPassword,
    dob,
    role: "client",
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
