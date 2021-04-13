import About from './baseMarkdownPage'
import { F } from 'common'
import type { GetServerSidePropsContext } from 'next'

export default About

export async function getServerSideProps(
  context: GetServerSidePropsContext<{ url: string }>
) {
  const content = await (await F(encodeURI('/api/' + context.query.url))).text()
  return {
    props: { content },
  }
}
