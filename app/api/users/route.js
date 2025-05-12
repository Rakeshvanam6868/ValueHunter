// app/api/users/route.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();

  try {
    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        age: parseInt(body.age),
        city: body.city,
        email: body.email,
      },
    });

    return Response.json(newUser, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
