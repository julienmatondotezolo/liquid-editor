import config from "../config/config.json";
import { getFromStorage, getHighestId, setToStorage } from "../helpers";

export const initialScenarioState = [
  {
    id: 0,
    name: "untitled-scenario.json",
    content: { company: "Bothive" },
  },
];

export const reducerTypes = {
  Add: "add",
  Update: "update",
};

export const scenariosReducer = (scenarios, action) => {
  let newScenarios = [];

  switch (action.type) {
    // ADD
    case reducerTypes.Add:
      // eslint-disable-next-line no-case-declarations
      const newInitialScenarioState = { ...initialScenarioState[0] };
      // eslint-disable-next-line no-case-declarations
      const newId = getHighestId(scenarios);
      // eslint-disable-next-line no-case-declarations
      const newScenarioId = scenarios.length;

      newInitialScenarioState.id = newId;
      newInitialScenarioState.name = `untitled-scenario-${newScenarioId}.json`;
      newScenarios = [...scenarios, newInitialScenarioState];
      setToStorage(config.STORAGE.SCENARIOS, newScenarios);
      return newScenarios;
    // UPDATE
    case reducerTypes.Update:
      newScenarios = [...scenarios].map((scenario) =>
        scenario.id === action.id
          ? {
              ...scenario,
              ...action.key,
          }
          : scenario
      );
      setToStorage(config.STORAGE.SCENARIOS, newScenarios);
      return newScenarios;
  }
};
