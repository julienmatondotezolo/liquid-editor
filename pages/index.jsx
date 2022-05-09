import React from "react";

import { Editor } from "../src/components/editor";
import { Header, Sidebar } from "../src/components/shared";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <Editor />
      </div>
    </>
  );
}
