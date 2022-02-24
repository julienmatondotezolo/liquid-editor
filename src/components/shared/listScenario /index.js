import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useRecoilState } from "recoil";

import { scenarioAtom } from "../../../recoil/atoms";
import styles from "./style.module.scss";

export const ListScenario = ({ scenarioId, setOpen }) => {
  const [scenario, setScenario] = useRecoilState(scenarioAtom(scenarioId));
  const router = useRouter();
  const { id } = router.query;

  return (
    <Link href={`/scenario/${scenarioId}`} key={scenarioId} passHref>
      <li
        className={scenario.id == id ? styles.active : ""}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      >
        <p>{`${scenario.name}${scenarioId}`}</p>
      </li>
    </Link>
  );
};

export default ListScenario;
