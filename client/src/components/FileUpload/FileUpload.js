import { BsUpload } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';

import styles from './FileUpload.module.css';

function FileUpload({ accept, multiple, id, ...otherProps }) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    if (files.length === 0) {
      return;
    }

    inputRef.current.files = files;
  }, [files]);

  function handleDragEnter(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  }

  function handleChange(e) {
    setFiles(e.currentTarget.files);
  }

  return (
    <div className={styles.container}>
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
        {files.length > 0 && (
          <div
            className={styles.imagePreview}
            style={{
              backgroundImage:
                files.length > 0
                  ? `url(${URL.createObjectURL(files[0])})`
                  : 'none',
            }}
          />
        )}
        <div className={styles.content}>
          <BsUpload size={35} />
          {files.length > 0 && files[0].name}
        </div>
      </label>
    </div>
  );
}

export default FileUpload;
