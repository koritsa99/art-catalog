import styles from './FormField.module.css';

function FormField({ label, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputBox}>{children}</div>
    </div>
  );
}

export default FormField;
