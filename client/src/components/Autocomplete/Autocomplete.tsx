import React, { useRef, useState } from 'react';

import styles from './Autocomplete.module.css';
import Input from '../Input/Input';
import Button from '../Button';
import { useClickOutside } from '../../hooks/useClickOutside';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {
  options: any[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectOption: (option: any, i: number) => void;
}

function Autocomplete({
  options,
  value,
  onChange,
  onSelectOption,
  ...otherProps
}: IProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function closeOptions(): void {
    setOptionsOpen(false);
  }

  useClickOutside(inputRef, closeOptions);

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
                onSelectOption(option, i);
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
