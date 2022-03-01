import { atom, atomFamily, DefaultValue } from "recoil";

const persistLocalStorage = ({ onSet, setSelf, node }) => {
  if (typeof window !== "undefined") {
    const storedItems = localStorage.getItem(node.key);

    if (storedItems != null) {
      setSelf(JSON.parse(storedItems));
    }

    onSet((newItems) => {
      if (newItems instanceof DefaultValue) {
        localStorage.removeItem(node.key);
      } else {
        localStorage.setItem(node.key, JSON.stringify(newItems));
      }
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
