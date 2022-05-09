import Image from "next/image";
import Link from "next/link";

import config from "../../../config/config.json";
import styles from "./style.module.scss";

export const Header = () => (
  <header className={styles.container}>
    <nav className={styles.nav}>
      <h1>
        Bothive Liquid editor
        <Link href={config.BOTHIVE.SALES_PAGE}>
          <a target="_blank">
            <span className={styles.poweredByContent}>
              powered by Bothive <Image src="/bothive_logo.svg" width={16} height={16}
alt="Bothive logo"></Image>
            </span>
          </a>
        </Link>
      </h1>
      <div className={styles.linkContainer}>
        <Link href={config.BOTHIVE.SALES_PAGE}>
          <a className={styles.link}>site</a>
        </Link>
        <Link href={config.BOTHIVE.APP}>
          <a className={styles.link}>app</a>
        </Link>
      </div>
    </nav>
  </header>
);
