import React from 'react'
import Markdown from 'react-markdown'
import type { NextPage } from 'next'

const BaseMarkDownPage: NextPage<{ content: string }> = (props) => {
  return (
    <div className="markdown paper">
      <Markdown source={props.content} />
    </div>
  )
}

export default BaseMarkDownPage
