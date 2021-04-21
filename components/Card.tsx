import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

const ALink = ({ link }) => (
  <div style={{ padding: '0.1rem 0.5rem' }}>
    <Link href={{ pathname: link.href }}>
      <a>{link.title}</a>
    </Link>
  </div>
)

const Card = ({ card, index }) => {
  const borderStyle = `border-${(index % 5) + 1}`
  return (
    <div
      className={cx('section border shadow', borderStyle)}
      style={{ padding: '1rem' }}
    >
      <h3 className="padding-small">{card.title}</h3>
      {card.links.map((link) => (
        <ALink link={link} key={link.title} />
      ))}
    </div>
  )
}

export default Card
