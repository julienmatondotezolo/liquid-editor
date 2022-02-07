import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/header";
import ImportButton from "../src/components/importButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bothive liquid editor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ImportButton />
    </div>
  );
}
