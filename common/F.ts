export const F = (url: string, init?: RequestInit): Promise<Response> =>
  fetch(url.startsWith('http') ? url : `${window.location.origin}${url}`, init)
