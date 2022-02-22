import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bothive liquid editor | BETA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
