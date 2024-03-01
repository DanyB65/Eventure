import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email')
  const phoneNumber = searchParams.get('phoneNumber')
  const isBusinessOwner = searchParams.get('isBusinessOwner')
  const dateOfBirth = searchParams.get('dateOfBirth')
  const address =searchParams.get('address')
  const bio =searchParams.get('bio')
 
  try {
    await sql`INSERT INTO Users (FirstName, LastName, Email, PhoneNumber, IsBusinessOwner, DateOfBirth, Address, Bio) VALUES (${firstName}, ${lastName}, ${email}, ${phoneNumber}, ${isBusinessOwner}, ${dateOfBirth}, ${address}, ${bio});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM Pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}