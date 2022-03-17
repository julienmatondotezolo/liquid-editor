import React from "react";

import { Editor } from "../src/components/editor";
import Header from "../src/components/shared/header";
import Sidebar from "../src/components/shared/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <Editor />
      </div>
    </>
  );
}
