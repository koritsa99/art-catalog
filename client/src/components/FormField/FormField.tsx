import styles from './FormField.module.css';

interface IProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

function FormField({ label, htmlFor, children }: IProps) {
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
