import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const title = 'Nest Genomics'
const description =
  'Making genetic testing mainstream and integrated into patient care is difficult,  Nest makes it easy'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <meta name="application-name" content={title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          ></meta>
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="description" content={description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="none" />
          <meta name="msapplication-TileColor" content="#E75732" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#FFFFFF" />
          <link
            rel="apple-touch-icon"
            href="/icons/touch-icon-iphone.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/icons/touch-icon-ipad-retina.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#E75732"
          />
          <link
            href="/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <meta
            name="twitter:url"
            content="https://twitter.com/nestgenomics"
          />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta
            name="twitter:image"
            content="https://yourdomain.com/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@DavidWShadow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta
            property="og:url"
            content="https://www.nestgenomics.com/"
          />
          <meta
            property="og:image"
            content="/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
