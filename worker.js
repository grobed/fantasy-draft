addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Check authentication using Cloudflare Access

  // Handle different routes
  if (request.method === 'POST' && request.url.endsWith('/submit')) {
    return handleSubmit(request);
  } else if (request.method === 'GET' && request.url.endsWith('/form')) {
    return new Response(getFormHTML(), {
      headers: { 'Content-Type': 'text/html' },
    });
  } else {
    return new Response('Not Found', { status: 404 });
  }
}

async function handleSubmit(request) {
  // Handle form submission logic
  // Read from Google Sheet, remove selected item, notify the next person, etc.

  return new Response('Form submitted successfully');
}

function getFormHTML() {
  // Generate and return HTML for the form
  // Include dropdown menu, submit button, etc.
}
