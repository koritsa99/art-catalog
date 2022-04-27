import styles from './IconButton.module.css';

function Button({ icon: Icon, className }) {
  return (
    <button
      className={className ? `${styles.button} ${className}` : styles.button}
    >
      <Icon size={18} />
    </button>
  );
}

export default Button;
