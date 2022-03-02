import React, { useContext, useEffect, useReducer, useState } from "react";

import config from "../config/config.json";
import { getFromStorage } from "../helpers";
import { initializer, reducerTypes, scenariosReducer } from "./reducer";

const scenarioContext = React.createContext();
const fileContext = React.createContext();

export const useScenarioContext = () => useContext(scenarioContext);
export const useFileContext = () => useContext(fileContext);

export const MyProvider = ({ children }) => {
  const [file, setFile] = useState({
    name: "template.html",
    content: "<h1>This is a {{company}} flow template.</h1>",
  });

  const [selectedScenario, setSelectedScenario] = useState(0);

  const [scenarios, dispatchScenarios] = useReducer(
    scenariosReducer,
    initializer()
  );

  const scenario = {
    add: () => {
      dispatchScenarios({ type: reducerTypes.Add });
    },
    update: (value, scenarioId) => {
      dispatchScenarios({
        type: reducerTypes.Update,
        key: value,
        id: scenarioId,
      });
    },
  };

  useEffect(() => {
    const storageFile = getFromStorage(config.STORAGE.USER_CODE);
    const storageScenarioId = getFromStorage(config.SCENARIOS_ID);

    if (storageFile) {
      setFile(JSON.parse(storageFile));
    }

    if (storageScenarioId) {
      setSelectedScenario(JSON.parse(storageScenarioId));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(config.STORAGE.USER_CODE, JSON.stringify(file));
    window.localStorage.setItem(
      config.STORAGE.SCENARIOS_ID,
      JSON.stringify(selectedScenario)
    );
  }, [file, selectedScenario]);

  return (
    <fileContext.Provider value={{ file, setFile }}>
      <scenarioContext.Provider
        value={{ scenarios, scenario, selectedScenario, setSelectedScenario }}
      >
        {children}
      </scenarioContext.Provider>
    </fileContext.Provider>
  );
};
