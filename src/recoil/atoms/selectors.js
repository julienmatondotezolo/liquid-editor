import { selector } from "recoil";

import { scenarioAtom, scenariosAtom } from "./atoms";

export const selectedElementProperties = selector({
  key: "selectedElementProperties",
  get: ({ get }) => {
    const selectedElementId = get(scenariosAtom);

    if (selectedElementId == null) return;

    return get(scenarioAtom());
  },
});
