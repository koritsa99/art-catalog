import styles from './Spinner.module.css';

interface IProps {
  size?: string;
  color?: string;
}

function Spinner({ size = '10px', color = 'inherit' }: IProps) {
  return <div className={styles.spinner} style={{ fontSize: size, color }} />;
}

export default Spinner;
