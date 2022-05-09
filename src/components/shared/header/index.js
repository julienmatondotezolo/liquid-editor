import Image from "next/image";

import styles from "./style.module.scss";

export const Header = () => (
  <header className={styles.container}>
    <nav className={styles.nav}>
      <h1>
        <Image src="/bothive_logo.svg" width={24} height={24} alt="Bothive logo"></Image>
        Bothive Liquid editor
      </h1>
    </nav>
  </header>
);
