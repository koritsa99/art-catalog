import styles from './FormField.module.css';

function FormField({ label, htmlFor, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <div className={styles.inputBox}>{children}</div>
    </div>
  );
}

export default FormField;
