import styles from './Spinner.module.css';

function Spinner({ size = '10px', color = 'inherit' }) {
  return <div className={styles.spinner} style={{ fontSize: size, color }} />;
}

export default Spinner;
