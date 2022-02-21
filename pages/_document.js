import { Html, Head, Main, NextScript } from 'next/document'
import appConfig from '../config.json';

export default function Document() {
  return (
    <Html lang={'"' + appConfig.lang + '"'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}