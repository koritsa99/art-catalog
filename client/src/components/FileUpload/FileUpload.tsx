import { BsUpload } from 'react-icons/bs';
import React, { useState, useRef, useEffect } from 'react';

import styles from './FileUpload.module.css';

interface IProps extends React.ComponentPropsWithoutRef<'input'> {}

function FileUpload({ accept, multiple, id, ...otherProps }: IProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);

  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (files?.length === 0) {
      return;
    }

    inputRef.current.files = files;
  }, [files]);

  function handleDragEnter(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e: React.DragEvent<HTMLInputElement>) {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    setIsDragging(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFiles(e.currentTarget.files);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputBox}>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className={styles.input}
          id={id}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onChange={handleChange}
          {...otherProps}
        />
        <label
          className={isDragging ? styles.labelDragOver : styles.label}
          htmlFor={id}
        >
          <div className={styles.labelHelp}>
            <BsUpload size={35} className={styles.labelIcon} />
            <p className={styles.labelText}>
              Drop images here or click and browse
            </p>
          </div>
        </label>
      </div>

      {files && files.length > 0 && (
        <div className={styles.previews}>
          {Array.from(files).map((file, i) => (
            <div key={i} className={styles.previewsItem}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className={styles.previewsImg}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
