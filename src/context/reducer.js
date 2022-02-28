import { getHighestId, setToStorage } from "../helpers";

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
  let newscenarios = [];

  switch (action.type) {
    // ADD
    case reducerTypes.Add:
      // eslint-disable-next-line no-case-declarations
      const newInitialScenarioState = { ...initialScenarioState[0] };
      // eslint-disable-next-line no-case-declarations
      const newId = getHighestId(scenarios);
      // eslint-disable-next-line no-case-declarations
      const newScenarioId = scenarios.length + 1;

      newInitialScenarioState.id = newId;
      newInitialScenarioState.name = `${newInitialScenarioState.name}_${newScenarioId}.json`;
      newscenarios = [...scenarios, newInitialScenarioState];
      setToStorage("scenarios", newscenarios);
      return newscenarios;

    // UPDATE
    case reducerTypes.Update:
      newscenarios = [...scenarios].map((scenario) =>
        scenario.id === action.id
          ? {
            ...scenario,
            ...action.key,
          }
          : scenario
      );
      setToStorage("scenarios", newscenarios);
      return newscenarios;
  }
};
