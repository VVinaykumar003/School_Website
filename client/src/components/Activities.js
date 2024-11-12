import React from 'react';

const OurApproach = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Extracurricular Activities</h2>
      <div style={styles.content}>
        <div style={styles.imagePlaceholder}></div>
        <div style={styles.textContent}>
          <p style={styles.description}>
          We offer a wide range of extracurricular activities to enrich our students' educational experience and help them develop new skills:
          </p>
          <ul style={styles.list}>
          <li style={styles.listItem}>Debate Club</li>
          <li style={styles.listItem}>Environmental Club</li>
          <li style={styles.listItem}>Drama Club</li>
          <li style={styles.listItem}>Coding Club</li>
          <li style={styles.listItem}>Robotics Team</li>
          <li style={styles.listItem}>Student Council</li>
          <li style={styles.listItem}>Chess Club</li>
          <li style={styles.listItem}>Community Service Club</li>
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
    marginBottom: '30px',
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
