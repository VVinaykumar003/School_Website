import React from 'react';


const NotFound = () => {
  const styles = {
    notFound: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      backgroundColor: '#FFFFFF',
    },
    content: {
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    errorCode: {
      fontSize: '72px',
      fontWeight: 'bold',
      color: '#444',
    },
    errorMessage: {
      fontSize: '40px',
      margin: '10px 0',
    },
    errorDescription: {
      fontSize: '16px',
      color: '#777',
      marginBottom: '20px',
    },
    goHomeButton: {
      padding: '10px 20px',
      fontSize: '16px',
      color: '#fff',
      backgroundColor: '#444',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <>
    <div style={styles.notFound}>
      <div style={styles.content}>
        <div style={styles.errorCode}> <img src="404-PNF.png" alt="Education" /></div>
        <p style={styles.errorMessage}>Page Not Found</p>
        <p style={styles.errorDescription}>
          We're sorry, the page you requested could not be found.<br />
          Please go back to the homepage.
        </p>
        <button 
          style={styles.goHomeButton} 
          onClick={() => window.location.href = '/'}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#444'}
        >
          Go Home
        </button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
