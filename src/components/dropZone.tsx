import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "../styles/Dropzone.module.scss";

function Dropzone() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setIsDragging(true);
  }, []);

  useEffect(() => {}, [isDragging]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`${isDragging ? "" : `${styles.dropzone} bg-black`}`}
    >
      <input {...getInputProps()} />
      {isDragging ? (
        <img src={uploadedImage} alt="Uploaded" width={390} height={390}/>
      ) : (
        <div className={styles.container}>
          <p className={styles.title}>Add media file</p>
          <p className={styles.subtitle}>or drop file to upload</p>
        </div>
      )}
    </div>
  );
}

export default Dropzone;
