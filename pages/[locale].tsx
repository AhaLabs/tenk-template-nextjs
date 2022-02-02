import Layout from "../components/layout";
import { getLocales, getLocale } from "../lib/locales";
import type { Locale } from "../lib/locales";
import Head from "next/head";
import Markdown from "react-markdown";

export async function getStaticPaths() {
  const locales = getLocales();
  return {
    paths: locales.map(({ id }) => ({
      params: { locale: id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allLocales = getLocales();
  const locale = await getLocale(params.locale);
  return {
    props: { allLocales, locale },
  };
}

export default function Post({
  allLocales,
  locale,
}: {
  allLocales: Locale[];
  locale: Locale;
}) {
  const i18n = locale.i18n;
  return (
    <Layout
      title={i18n.title}
      description={i18n.description}
      locales={allLocales}
      currentLocale={locale.id}
    >
      <Head>
        <title>{i18n.title}</title>
      </Head>
      <section title="hero">
        <h1>
          <Markdown children={i18n.hero_title} />
        </h1>
        <Markdown children={i18n.hero_body} />
        <button>
          <Markdown children={i18n.hero_cta} />
        </button>
        <img
          src={require("../public/images/hero.png")}
          width={325}
          height={500}
          alt=""
          style={{ marginBottom: `1.45rem` }}
        />
      </section>
    </Layout>
  );
}
