import React from 'react'
import Head from 'next/head'

type MainHeadProps = {
  title: string
}

export default function MainHead(props: MainHeadProps) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
    </Head>
  )
}
