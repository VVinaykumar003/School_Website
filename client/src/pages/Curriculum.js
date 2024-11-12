import React from "react";
import Activities from "../components/Activities";
import Approach from "../components/Approach"

const CoreSubjects = () => {
  
  const styles = {
    coreSubjects: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    header: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    subjectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      padding:"40px",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    subjectCard: {
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      textAlign: "left",
      transition: "transform 0.3s",
    },
    subjectCardHover: {
      transform: "translateY(-5px)",
    },
    icon: {
      fontSize: "24px",
      display: "inline-block",
      marginBottom: "10px",
    },
    subjectTitle: {
      fontSize: "18px",
      margin: "10px 0",
    },
    subjectDescription: {
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <>
    <div style={styles.coreSubjects}>
      <h2 style={styles.header}>Core Subjects</h2>
      <div style={styles.subjectsGrid}>
        {[
          { icon: "📘", title: "Mathematics", description: "Develop problem-solving skills through algebra, geometry, and calculus." },
          { icon: "🔬", title: "Science", description: "Explore biology, chemistry, and physics through experiments and theory." },
          { icon: "🌐", title: "Social Studies", description: "Understand our world through history, geography, and civics." },
          { icon: "🏃", title: "Physical Education", description: "Promote health and fitness through sports and activities." },
          { icon: "🖌️", title: "Arts", description: "Express creativity through various artistic mediums." },
          { icon: "🎼", title: "Music", description: "Develop musical skills through instrument lessons and theory." },
          { icon: "📖", title: "English", description: "Enhance communication skills through literature and writing." },
          { icon: "📖", title: "commerce", description: "Commerce subejcts are programs that focus on developing knowledge and skills in Accounting, Finance, and Commerce." },
        ].map((subject, index) => (
          <div
            key={index}
            style={styles.subjectCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <span style={styles.icon}>{subject.icon}</span>
            <h3 style={styles.subjectTitle}>{subject.title}</h3>
            <p style={styles.subjectDescription}>{subject.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Activities/>
    <Approach />
    </>

    
  );
};



export default CoreSubjects;
