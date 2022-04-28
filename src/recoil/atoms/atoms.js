import Dexie from "dexie";
import { atom, atomFamily, DefaultValue } from "recoil";

const db = new Dexie("liquidEditorDB");

db.version(1).stores({
  file: "++id, value",
  scenario: "++id, value",
});

const persistLocalStorage = ({ onSet, setSelf, node }) => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem(node.key);

    const fileTable = db.file.count();

    if (storedItems !== null) setSelf(JSON.parse(storedItems));

    onSet((newValue) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(node.key);
      }

      if (node.key == "file" && fileTable._value == 0) db.file.add({ newValue });

      if (newValue.id) db.scenario.put({ id: newValue.id, newValue });

      localStorage.setItem(node.key, JSON.stringify(newValue));
    });
  }
};

export const fileAtom = atom({
  key: "file",
  default: {
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  },
  effects: [persistLocalStorage],
});

export const scenariosAtom = atom({
  key: "scenariosIds",
  default: [0],
  effects: [persistLocalStorage],
});

export const selectedScenarioState = atom({
  key: "selectedScenarioState",
  default: 0,
  effects: [persistLocalStorage],
});

export const scenarioAtomFamily = atomFamily({
  key: "scenario",
  default: (id) => ({
    id: id,
    name: `untitled-scenario-${id}.json`,
    content: { company: "Bothive" },
  }),
  effects: [persistLocalStorage],
});
