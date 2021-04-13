export const F = (url: string, init?: RequestInit): Promise<Response> =>
  fetch(
    url.startsWith('http')
      ? url
      : `${process.env.BASE_URL ?? 'http://localhost:3000'}${url}`,
    init
  )
