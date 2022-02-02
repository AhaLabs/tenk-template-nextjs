import Head from "next/head";
import styles from "../styles/utils.module.css";
import { useRouter } from "next/router";

// FIXME: get these from settings.json
const siteUrl = "https://tenkbay.com";
const twitterHandle = "@TenKBay";

function presentLocale(locale) {
  return `${locale.id} - ${locale.i18n.lang_picker}`;
}

export default function Layout({
  children,
  title = "",
  description = "",
  locales = [],
  currentLocale = "",
}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta property="og:image" content="/images/hero.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:title" content={title} />
      </Head>
      {children}
      {currentLocale && (
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <select
            defaultValue={currentLocale}
            onChange={({ target }) => router.push(`./${target.value}`)}
          >
            {locales.map((locale) => (
              <option key={locale.id} value={locale.id}>
                {presentLocale(locale)}
              </option>
            ))}
          </select>
        </footer>
      )}
    </div>
  );
}
