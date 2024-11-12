import React from 'react';

const OurApproach = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Approach</h2>
      <div style={styles.content}>
        <div style={styles.imagePlaceholder}></div>
        <div style={styles.textContent}>
          <p style={styles.description}>
            Our curriculum is designed to provide a comprehensive and balanced education that prepares students for future academic and professional success. We focus on:
          </p>
          <ul style={styles.focusList}>
            <li style={styles.listItem}>* Developing critical thinking and problem-solving skills</li>
            <li style={styles.listItem}>* Fostering creativity and innovation</li>
            <li style={styles.listItem}>* Promoting effective communication and collaboration</li>
            <li style={styles.listItem}>* Encouraging global awareness and cultural understanding</li>
            <li style={styles.listItem}>* Supporting personal growth and character development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '50%',
    height: '250px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
  },
  textContent: {
    width: '50%',
  },
  description: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  },
  focusList: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '16px',
    color: '#0056b3',
    marginBottom: '8px',
  },
};

export default OurApproach;
