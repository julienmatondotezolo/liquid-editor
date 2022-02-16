import Head from "next/head";
import React, { useState } from "react";

import { JSONeditor } from "../src/components/json_editor";
import Header from "../src/components/shared/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bothive Scenario</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <JSONeditor />
    </div>
  );
}
