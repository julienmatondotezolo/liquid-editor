import { atom, atomFamily } from "recoil";

export const fileAtom = atom({
  key: "file",
  default: {
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  },
});

export const scenariosAtom = atom({
  key: "scenarios",
  default: [],
});

export const scenarioAtom = atomFamily({
  key: "scenario",
  default: {
    name: "untitled-scenario.json",
    content: { company: "Bothive" },
  },
});
