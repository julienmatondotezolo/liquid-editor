import React from "react";

import { JSONeditor } from "../src/components/json_editor";
import { Header, Sidebar } from "../src/components/shared/";

export default function Scenario() {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <JSONeditor />
      </div>
    </>
  );
}
