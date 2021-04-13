import { getAllPosts } from 'common/qiniu'
export default async function handler(req, res) {
  res.status(200).json(await getAllPosts())
}
