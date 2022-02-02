import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * This is the only way Next.js provides to edit the `lang` on the `<html>`
 * element, e.g.:
 *
 *     <html lang="en">
 *
 * See https://nextjs.org/docs/advanced-features/custom-document
 *
 * This is shared by all Next.js pages, which means that our internationalized
 * pages cannot customized `lang` 😞
 * This means that our internationalized pages
 */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
