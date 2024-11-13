import React from "react";

const FacultyCards = () => {
  // Sample data for teachers, each with a placeholder image URL
  const teachers = [
    { id: 1, name: "Dr. John Doe", subject: "Mathematics", image: "mission.png" },
    { id: 2, name: "Dr. Jane Smith", subject: "Physics", image: "mission.png" },
    { id: 3, name: "Dr. Albert Brown", subject: "Chemistry", image: "mission.png" },
    { id: 4, name: "Dr. Linda White", subject: "Biology", image: "mission.png" },
    { id: 5, name: "Dr. Emma Johnson", subject: "English", image: "mission.png" },
    { id: 6, name: "Dr. Mark Wilson", subject: "Computer Science", image: "mission.png" },
    { id: 7, name: "Dr. Sophia Green", subject: "History", image: "mission.png" },
    { id: 8, name: "Dr. William Black", subject: "Geography", image: "mission.png" },
    { id: 9, name: "Dr. Olivia Scott", subject: "Economics", image: "mission.png" },
    { id: 10, name: "Dr. James Evans", subject: "Political Science", image:"mission.png" },
    { id: 11, name: "Dr. Mia Taylor", subject: "Psychology", image: "mission.png" },
    { id: 12, name: "Dr. Henry Moore", subject: "Philosophy", image: "mission.png" },
  ];

  // Styles

  const faculty ={
    textAlign:"center"

  }
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  };

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "250px",
    padding: "20px",
    textAlign: "center",
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    // borderRadius: "50%",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "18px",
    margin: "0 0 10px",
    color: "#333",
  };

  const subjectStyle = {
    fontSize: "14px",
    color: "#666",
  };

  return (
    <>
    <div style={faculty}>
        <h1>Meet Our Faculty</h1>
        <p>Our dedicated faculty brings a wealth of knowledge and experience to our<br></br>eLearning platform, ensuring quality education for all students.</p>
    </div>
    <div style={containerStyle}>
      {teachers.map((teacher) => (
        <div
          key={teacher.id}
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
        >
          <img src={teacher.image} alt={`${teacher.name}`} style={imageStyle} />
          <h3 style={titleStyle}>{teacher.name}</h3>
          <p style={subjectStyle}>{teacher.subject}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default FacultyCards;
