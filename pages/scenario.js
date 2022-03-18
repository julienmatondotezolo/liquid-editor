import React from "react";

import { JSONeditor } from "../src/components/json_editor";
import Header from "../src/components/shared/header";
import Sidebar from "../src/components/shared/Sidebar";

export default function Scenario() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <JSONeditor />
      </div>
    </>
  );
}
