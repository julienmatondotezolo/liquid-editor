import React from 'react';
import Link from 'next/link'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return <div className={styles.sidebar}>
            <h3>Editor</h3>
            <h3>Scenario</h3>
            <ul>
                <li>
                    <Link href="/">
                        <a>Scenario 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Scenario 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Add new scenario</a>
                    </Link>
                </li>
            </ul>
        </div>;
};

export default Sidebar;
