// app/api/readFile/route.js
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const filePath = path.join(process.cwd(), 'public', 'papers', 'txt', 'An improved genetic algorithm based fractional open circuit voltage MPPT for solar PV systems.pdf.txt');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return new Response(JSON.stringify({ content: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error reading file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
