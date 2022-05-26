import { IconType } from 'react-icons';
import styles from './IconButton.module.css';

interface IProps extends React.ComponentPropsWithoutRef<'button'> {
  icon: IconType;
}

function IconButton({ icon: Icon, className, ...otherProps }: IProps) {
  return (
    <button
      type="button"
      className={className ? `${styles.button} ${className}` : styles.button}
      {...otherProps}
    >
      <Icon size={18} />
    </button>
  );
}

export default IconButton;
