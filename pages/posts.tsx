import React from 'react'
import { useRouter } from 'next/router'
import { F } from 'common'
import type { NextPage } from 'next'

const Posts: NextPage<{ posts: any[] }> = (props) => {
  const router = useRouter()
  return (
    <>
      <div className="paper">
        {props.posts.map((p) => (
          <div className="margin-small" key={p.hash}>
            <a
              onClick={() =>
                router.push(`/post?post=${encodeURIComponent(p.url)}`)
              }
            >
              {p.name}
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const posts = await (await F('/api/posts')).json()
  return {
    props: { posts },
  }
}

export default Posts
