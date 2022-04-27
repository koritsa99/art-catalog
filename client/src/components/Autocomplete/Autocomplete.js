import { useRef, useState } from 'react';

import styles from './Autocomplete.module.css';
import Input from '../Input';
import Button from '../Button';
import { useClickOutside } from '../../hooks/useClickOutside';

function Autocomplete({ options, value, onChange, onSelect, ...otherProps }) {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const inputRef = useRef();

  function closeOptions() {
    setOptionsOpen(false);
  }

  useClickOutside(inputRef.current, closeOptions);

  return (
    <div className={styles.container}>
      <Input
        ref={inputRef}
        type="text"
        autoComplete="off"
        value={value}
        onChange={onChange}
        onClick={() => setOptionsOpen(true)}
        {...otherProps}
      />
      {optionsOpen && options.length > 0 && (
        <div className={styles.options}>
          {options.map((option, i) => (
            <Button
              key={i}
              className={styles.optionsItem}
              onClick={() => {
                onSelect(option, i);
              }}
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Autocomplete;
