import { F } from 'common'
import { NextApiRequest } from 'next'

export default async function handler(req: NextApiRequest, res) {
  const { url } = req.query
  const content = await (await F(encodeURI(url as string))).text()
  res.status(200).json({ content })
}
