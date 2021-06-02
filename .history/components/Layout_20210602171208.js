import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      <div>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Albert | e Education ",
  description: "Find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};
