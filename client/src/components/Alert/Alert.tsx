import styles from './Alert.module.css';

interface IProps {
  colorScheme?: 'default' | 'secondary';
  children: React.ReactNode;
}

function Alert({ colorScheme = 'default', children }: IProps) {
  return <div className={styles.alert}>{children}</div>;
}

export default Alert;
