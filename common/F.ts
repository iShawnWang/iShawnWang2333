export const F = (url: string, init?: RequestInit): Promise<Response> =>
  fetch(url.startsWith('http') ? url : `${'http://localhost:3000'}${url}`, init)
