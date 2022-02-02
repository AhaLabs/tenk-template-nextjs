import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import { getLocales } from "../lib/locales";

export default function Home({ locales }) {
  const router = useRouter();

  React.useEffect(() => {
    const preferredLocale = window.navigator.language;
    let matchingLocale = locales.find(
      (l) => l.id.replace("_", "-") === preferredLocale
    );
    if (!matchingLocale)
      matchingLocale = locales.find(
        (l) => l.id === preferredLocale.replace(/-[A-Z]{2}/, "")
      );

    if (matchingLocale) {
      console.log({ locales, preferredLocale, matchingLocale });
      router.push(`/${matchingLocale.id}`);
    }
  }, []);

  return (
    <Layout>
      {locales.map(({ id, i18n }) => (
        <p key={id}>
          <Link href={`/${id}`}>
            <a>{i18n.view_in}</a>
          </Link>
        </p>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const locales = getLocales();
  return { props: { locales } };
}
