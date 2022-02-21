import React from "react";

import { Editor } from "../src/components/editor";
import Header from "../src/components/shared/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Editor />
    </div>
  );
}
