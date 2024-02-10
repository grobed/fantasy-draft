addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Define route for the root URL
  if (url.pathname === '/') {
    return handleFormRequest(request);
  } else if (url.pathname === '/submit' && request.method === 'POST') {
    return handleSubmitRequest(request);
  } else {
    return new Response('Not Found', { status: 404 });
  }
}

async function handleFormRequest(request) {
  // Logic for handling requests to the root URL (showing the form)
  // This could include serving an HTML form page
  return new Response('This is the form page');
}

async function handleSubmitRequest(request) {
  // Logic for handling form submissions at the /submit route
  // This could include processing form data and sending notifications
  return new Response('Form submitted successfully');
}
