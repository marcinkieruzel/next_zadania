import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getStyles } from 'typestyle'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = await renderPage()
    const styleTags = getStyles()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
          <style id="styles-target">{this.props.styleTags}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
