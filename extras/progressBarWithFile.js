import React, { useState, useEffect } from "react";

const FileUploadSimulator = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setProgress(0);
    setIsUploading(false);
  };

  // Handle upload click
  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }
    setIsUploading(true);
  };

  // Simulate upload progress
  useEffect(() => {
    let interval;

    if (isUploading && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }

    return () => clearInterval(interval);
  }, [isUploading, progress]);

  return (
    <div style={styles.container}>
      <h2>File Upload Simulator</h2>

      <input type="file" onChange={handleFileChange} />

      <button onClick={handleUpload} style={styles.button}>
        Upload
      </button>

      {isUploading && (
        <div style={styles.progressContainer}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progress}%`,
            }}
          ></div>
        </div>
      )}

      {isUploading && <p>{progress}%</p>}

      {progress === 100 && <p>✅ Upload Complete!</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    cursor: "pointer",
  },
  progressContainer: {
    width: "100%",
    height: "20px",
    background: "#eee",
    marginTop: "20px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    background: "#4caf50",
    transition: "width 0.3s ease",
  },
};

export default FileUploadSimulator;