import type { GetServerSidePropsContext } from 'next'
import Markdown from 'react-markdown'
import { F } from 'common'
import type { NextPage } from 'next'

const Post: NextPage<{ content: string }> = (props) => (
  <>
    <div className="markdown paper">
      <Markdown source={props.content} />
    </div>
  </>
)

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ post: string }>
) {
  const content = await (
    await F(encodeURI(context.query.post as string))
  ).text()
  return {
    props: { content },
  }
}

export default Post
