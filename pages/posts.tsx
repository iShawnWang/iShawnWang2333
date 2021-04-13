import React from 'react'
import Link from 'next/link'
import { F } from 'common'
import type { NextPage } from 'next'

const Posts: NextPage<{ posts: any[] }> = (props) => {
  return (
    <>
      <div className="paper">
        {props.posts.map((p) => (
          <div className="margin-small" key={p.hash}>
            <Link href={`/post?post=${p.url}`}>
              <a>{p.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await (await F('/api/posts')).json()
  return {
    props: { posts },
  }
}

export default Posts
