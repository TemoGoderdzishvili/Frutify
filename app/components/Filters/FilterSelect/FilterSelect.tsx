import styles from "./FiltersSelect.module.css";

interface Value {
  title: string
  value: string
}

interface Props {
  onChange?: () => void
  values: Value[]  
}

const FilterSelect = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectWrapper}>
        <select className={styles.customSelect}>
          {
            props.values?.map(item => <option value={item.value}>{item.title}</option>)
          }
        </select>
      </div>
    </div>
  );
};
export default FilterSelect;
