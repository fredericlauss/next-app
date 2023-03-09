export async function GET(request) {
    const responseBody = { name: 'John Doe' };
    const responseInit = {
      headers: { 'content-type': 'application/json' },
    };
    return new Response(JSON.stringify(responseBody), responseInit);
  }