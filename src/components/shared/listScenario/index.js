import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import config from "../../../config/config.json";
import { scenarioAtomFamily, selectedScenarioState } from "../../../recoil/atoms";
import { DeleteScenarioButton } from "../deleteScenarioButton";
import styles from "./style.module.scss";

export const ListScenario = ({ id }) => {
  const { name } = useRecoilValue(scenarioAtomFamily(id));
  const [selectedScenario, setSelectedScenario] = useRecoilState(selectedScenarioState);
  const [open, setOpen] = useState(false);

  const addSelectedScenarioId = () => {
    setSelectedScenario(id);
  };

  return (
    <Link href={config.ROUTE.SCENARIO} passHref>
      <li
        className={`${styles.listItem} ${selectedScenario === id ? styles.active : ""}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          data-id={id}
          onClick={() => addSelectedScenarioId()}
          onKeyDown={() => addSelectedScenarioId()}
          aria-hidden="true"
          role="button"
          tabIndex="0"
        >
          <p>{name}</p>
        </div>
        <DeleteScenarioButton customButtonStyle={{ opacity: open ? "1.0" : "0" }} scenarioId={id} />
      </li>
    </Link>
  );
};

export default ListScenario;
