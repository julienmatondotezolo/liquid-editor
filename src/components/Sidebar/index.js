import React from 'react';
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return <div className={styles.sidebar}>
            <h3>Editor</h3>
            <h3>Scenario</h3>
            <ul>
                <li>Scenario 1</li>
                <li>Scenario 2</li>
                <li>Add new scenario</li>
            </ul>
        </div>;
};

export default Sidebar;
