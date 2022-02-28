import { selector } from "recoil";

import { scenarioAtomFamily, scenariosAtom } from "../atoms/atoms";

export const scenariosSelector = selector({
  key: "scenarioSelector",

  get: ({ get }) => {
    const scenarioIds = get(scenariosAtom);

    scenarioIds.map((id) => get(scenarioAtomFamily(id)));

    const newScenarios = scenarioIds.map((id) => get(scenarioAtomFamily(id)));

    return newScenarios;
  },
});
