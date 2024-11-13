import React from 'react';
import CountUp from 'react-countup';


const MissionVision = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: '#FFFFF',
      boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    content: {
      maxWidth: '1000px',
      display: 'flex',
      gap: '2.5rem',
      flexWrap: 'wrap',
    },
    imageContainer: {
      width: '100%',
      maxWidth: '400px',
      overflow: 'hidden',
      borderRadius: '8px',
    //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '200%', // maintains aspect ratio
      objectFit: 'cover', // crops image to fit within the container
      maxHeight: '300px', // ensures the image doesn't exceed this height
    },
    textContainer: {
      flex: 1,
      textAlign: 'left',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#333',
    },
    description: {
      fontSize: '1rem',
      color: '#666',
      lineHeight: 1.6,
      marginBottom: '1.5rem',
    },
    statsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    statItem: {
      flex: '1 1 45%',
      padding: '1rem',
      backgroundColor: '#fff',
      borderRadius: '8px',
    //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    statNumber: {
        textAlign:'left',
      fontSize: '2rem',
      color: '#333',
      margin: '0.5rem 0',
    },
    statDescription: {
      textAlign:'left',
      fontSize: '0.9rem',
      color: '#666',
      lineHeight: 1.4,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img src="mission.png" alt="Classroom" style={styles.image} />
          <img src="mission.png" alt="Classroom" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.title}>Our Mission & Vision</h2>
          <p style={styles.description}>
            Zager Public School is dedicated to empowering educators and learners through innovative eLearning
            solutions. Our mission is to enhance the educational experience and foster collaboration, making quality
            education accessible to all.
          </p>
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>
                <CountUp end={100} duration={2} /> %
              </h3>
              <p style={styles.statDescription}>
                We believe in Accessibility, ensuring education is available to everyone, and Innovation, continuously
                improving our platform with the latest technology. 
              </p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>
                <CountUp end={5000} duration={2} /> students
              </h3>
              <p style={styles.statDescription}>
                With a commitment to quality, we have supported over 5,000 students in their educational journeys,
                
              </p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>
                <CountUp end={200} duration={2} /> courses
              </h3>
              <p style={styles.statDescription}>
                Our diverse range of 200 interactive courses is designed to cater to various learning styles
              </p>
            </div>
            <div style={styles.statItem}>
              <h3 style={styles.statNumber}>
                <CountUp end={50} duration={2} /> educators
              </h3>
              <p style={styles.statDescription}>
                We proudly support a community of 50 dedicated educators who are committed to delivering high-quality
                online education and fostering student success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
