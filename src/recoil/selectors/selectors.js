/* eslint-disable indent */
import { selectorFamily } from "recoil";

import { scenarioAtom } from "../atoms/atoms";

export const scenarioSelector = selectorFamily({
  key: "scenarioIdSelector",
  // eslint-disable-next-line prettier/prettier
  get: (id) => ({ get }) => {
      // eslint-disable-next-line indent
      // eslint-disable-next-line newline-after-var
      const atom = get(scenarioAtom(id));
      console.log(atom);
      return atom;
    },
  // eslint-disable-next-line prettier/prettier
  set: (id) => ({ set }, newValue) => {
      console.log(scenarioAtom(id));
      console.log(newValue);
      set(scenarioAtom(id), newValue);
    },
});
