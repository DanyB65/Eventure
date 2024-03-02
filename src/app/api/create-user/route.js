import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get("first_name");
  const lastName = searchParams.get("last_name");
  const passwordHash = searchParams.get("password_hash");
  const email = searchParams.get("email");
  const salt = bcrypt.genSaltSync(13);
  const hash = await bcrypt.hash(passwordHash, salt);
  console.log(hash)

  try {
    await sql`INSERT INTO users (first_name, last_name, password_hash,email) VALUES (${firstName}, ${lastName},${hash},${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}

// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     first_name VARCHAR(50) NOT NULL,
//     last_name VARCHAR(50) NOT NULL,
//     password_hash VARCHAR(255) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//   );
