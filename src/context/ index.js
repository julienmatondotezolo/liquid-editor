import React, { useContext, useEffect, useReducer, useState } from "react";

import config from "../config/config.json";
import { getFromStorage, initialScenarioState } from "../helpers";
import { reducerTypes, scenariosReducer } from "./reducer";

const scenarioContext = React.createContext();
const fileContext = React.createContext();

export const useScenario = () => useContext(scenarioContext);
export const useFile = () => useContext(fileContext);

export const MyProvider = ({ children }) => {
  const [file, setFile] = useState({
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  });

  const [scenarioStorage, setScenarioStorage] = useState();

  useEffect(() => {
    const storageFile = getFromStorage(config.STORAGE.USER_CODE);
    const storageScenarios = getFromStorage(config.STORAGE.SCENARIOS);

    if (storageFile) {
      setFile(JSON.parse(storageFile));
    }

    if (storageScenarios) {
      setScenarioStorage(JSON.parse(storageScenarios));
    }
  }, []);

  const [scenarios, dispatchScenarios] = useReducer(
    scenariosReducer,
    initialScenarioState
  );

  const scenario = {
    add: () => {
      dispatchScenarios({ type: reducerTypes.Add });
    },
    update: (event, scenarioId) => {
      dispatchScenarios({
        type: reducerTypes.Update,
        key: { name: event.target.value },
        id: scenarioId,
      });
    },
  };

  return (
    <fileContext.Provider value={{ file, setFile }}>
      <scenarioContext.Provider value={{ scenarios, scenario }}>
        {children}
      </scenarioContext.Provider>
    </fileContext.Provider>
  );
};
