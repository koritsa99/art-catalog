import styles from './Button.module.css';

function Button({ children, type = 'button' }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
