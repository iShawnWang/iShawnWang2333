import { F, LRUMemoryStorage } from 'common'
import { NextApiRequest } from 'next'

export default async function handler(req: NextApiRequest, res) {
  const url = req.query.url as string
  const cached = LRUMemoryStorage.getItem(url)
  if (cached) {
    res.status(200).json({ content: cached })
  } else {
    const content = await (await F(url)).text()
    res.status(200).json({ content })
    LRUMemoryStorage.setItem(url, content)
  }
}
