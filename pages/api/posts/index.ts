import { getAllPosts } from 'common/qiniu'
import { LRUMemoryStorage } from 'common'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cached = LRUMemoryStorage.getItem(req.url)
  if (cached) {
    res.status(200).json(cached)
  } else {
    const posts = await getAllPosts()
    LRUMemoryStorage.setItem(req.url, JSON.stringify(posts))
    res.status(200).json(posts)
  }
}
