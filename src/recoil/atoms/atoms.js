import { atom } from "recoil";

export const fileAtom = atom({
  key: "file",
  default: {
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  },
});

export const scenarioAtom = atom({
  key: "scenario",
  default: {
    name: "untitled-scenario.json",
    content: { company: "Bothive" },
  },
});
