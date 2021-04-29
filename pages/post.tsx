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
  const { content } = await (
    await F(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        post: context.query.post as string,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
  ).json()
  return {
    props: { content },
  }
}

export default Post
