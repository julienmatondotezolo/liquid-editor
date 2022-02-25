import { atom, atomFamily } from "recoil";

export const fileAtom = atom({
  key: "file",
  default: {
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  },
});

export const scenariosAtom = atom({
  key: "scenariosIds",
  default: [0],
});

export const selectedScenarioState = atom({
  key: "selectedScenarioState",
  default: 0,
});

export const scenarioAtomFamily = atomFamily({
  key: "scenario",
  default: (id) => ({
    id: id,
    name: `untitled-scenario-${id}.json`,
    content: { company: "Bothive" },
  }),
});
