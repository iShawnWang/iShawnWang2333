import { getAllPosts } from 'common/qiniu'
import { LRUMemoryStorage, F } from 'common'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const url = req.body['post']
    const cached = LRUMemoryStorage.getItem(url)
    if (cached) {
      res.status(200).json({ content: cached })
    } else {
      const content = await (await F(url)).text()
      res.status(200).json({ content })
      LRUMemoryStorage.setItem(url, content)
    }
  } else {
    const cached = LRUMemoryStorage.getItem(req.url)
    if (cached) {
      res.status(200).json(cached)
    } else {
      const posts = await getAllPosts()
      LRUMemoryStorage.setItem(req.url, JSON.stringify(posts))
      res.status(200).json(posts)
    }
  }
}
