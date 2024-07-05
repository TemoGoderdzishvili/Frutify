import React from "react";
import styles from "./Select.module.css";
import FilterSelect from "../Filters/FilterSelect/FilterSelect";


export const Select = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blackBackground}>
        <div className={styles.fruit}> Fruits</div>
      </div>
      <div className={styles.selectWrapper}>
          <FilterSelect values={[
            {
              title: 'Price high to low',
              value: 'high-to-low'
            },
            {
              title: 'Price low to high',
              value: 'low-to-high'
            },
            {
              title: 'Oldest first',
              value: 'oldest-first'
            },
            {
              title: 'Newest first',
              value: 'newest-first'
            }
          ]} />
      </div>
    </div>
  );
};