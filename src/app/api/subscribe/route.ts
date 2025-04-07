export const subscriptions: unknown[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  subscriptions.push(body);
  console.log("Subscribed:", body.endpoint);
  return new Response(null, { status: 201 });
}
