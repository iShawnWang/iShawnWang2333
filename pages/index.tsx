import React from 'react'
import Card from 'components/Card'

const IndexData = [
  {
    title: 'BLOG',
    links: [{ title: 'iShawn.Wang', href: '/post' }],
  },
  {
    title: 'ME',
    links: [
      {
        title: 'About',
        href: `${process.env.NEXT_PUBLIC_ORIGIN}/post/${encodeURIComponent(
          process.env.NEXT_PUBLIC_OSS_ORIGIN + '/about.md'
        )}`,
      },
      { title: 'Github', href: 'https://github.com/iShawnWang' },
      { title: 'V2EX', href: 'https://www.v2ex.com/member/iShawnWang' },
      {
        title: 'Weibo',
        href:
          'https://weibo.com/2848310723/profile?rightmod=1&wvr=6&mod=personinfo',
      },
      {
        title: 'StackOverflow',
        href: 'https://stackoverflow.com/users/5767487/shawn-wang',
      },
    ],
  },
  {
    title: 'WORK',
    links: [
      {
        title: '@爱分类-爱回收',
        href: 'https://www.aifenlei.com/',
      },
      {
        title: '@贝壳金服',
        href: 'https://www.bkjk.com/',
      },
      {
        title: '@Strikingly',
        href: 'https://strikingly.com',
      },
    ],
  },
  {
    title: 'ANNOYING',
    links: [
      {
        title: 'instant Chat',
        href:
          'https://zh.wikipedia.org/wiki/%E5%8D%B3%E6%99%82%E9%80%9A%E8%A8%8A',
      },
      {
        title: 'password',
        href:
          'https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC_(%E5%AF%86%E7%A2%BC%E5%AD%B8)',
      },
    ],
  },
]

const THEME_MAP = {
  DARK: {
    '--paper-bg-color': '#222222',
    '--paper-content-color': '#dddddd',
    '--paper-border-color': '#ededed',
    '--paper-shadow-color': 'rgba(255, 255, 255, 0.2)',
    '--html-bg-color': '#272C35',
  },
  LIGHT: {
    '--paper-bg-color': '#f8f8fb',
    '--paper-content-color': '#41403e',
    '--paper-border-color': '#c1c0bd',
    '--paper-shadow-color': 'rgba(0, 0, 0, 0.2)',
    '--html-bg-color': '#f8f8fb',
  },
}

const onThemeChange = (switzh) => {
  const mode = switzh.target.checked ? 'DARK' : 'LIGHT'
  Object.keys(THEME_MAP[mode]).forEach((k) => {
    document.body.style.setProperty(k, THEME_MAP[mode][k])
  })
}

const Index = () => (
  <>
    <div
      className="paper"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h2 className="big-title">@iShawnWang</h2>
      <div>
        {IndexData.map((card, index) => (
          <Card card={card} key={card.title} index={index} />
        ))}
      </div>
      <label className="switch">
        <input type="checkbox" onChange={onThemeChange} />
        <span className="slider round" />
      </label>
      <blockquote className="bottom-quote">
        Simplicity is the ultimate sophistication. - Leonardo da Vinci
      </blockquote>
    </div>
  </>
)

export default Index
