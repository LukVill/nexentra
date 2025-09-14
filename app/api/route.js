import { NextResponse } from 'next/server';

let todos = [
  { id: 1, text: 'Learn Next.js app router', done: false },
];

export function GET() {
  return NextResponse.json({ todos });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const text = body?.text;
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id, text, done: false };
    todos.push(newTodo);

    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}
