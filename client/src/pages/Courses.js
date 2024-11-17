import React from 'react';
import '../style/Courses.css';

const Courses = () => {
  return (
    <div className="courses-section">
      {/* Introduction */}
      <div className="intro">
        <h2>Explore Our Courses</h2>
        <p>We offer a wide range of courses designed to engage, educate, and empower our students. From core subjects to extracurricular activities, there is something for everyone.</p>
      </div>

      {/* Categories */}
      <div className="course-categories">
        <h3>Course Categories</h3>
        <ul>
          <li>Core Subjects (Math, Science, Language Arts)</li>
          <li>Elective Subjects (Art, Music, Physical Education)</li>
          <li>Advanced Courses (AP, Honors)</li>
          <li>Special Programs (STEM, Coding, Environmental Studies)</li>
          <li>Extracurricular Activities (Sports, Clubs, Community Service)</li>
        </ul>
      </div>

      {/* Course List */}
      <div className="course-list">
        <h3>Course List</h3>
        <div className="course-item">
          <h4>Mathematics</h4>
          <p>Grade Levels: 6-12</p>
          <p>Duration: Full Year</p>
          <p>Description: Comprehensive course covering algebra, geometry, and calculus.</p>
        </div>
        <div className="course-item">
          <h4>Science</h4>
          <p>Grade Levels: 6-12</p>
          <p>Duration: Full Year</p>
          <p>Description: Explore topics in biology, chemistry, physics, and earth sciences.</p>
        </div>
        <div className="course-item">
          <h4>Art</h4>
          <p>Grade Levels: 6-12</p>
          <p>Duration: Semester</p>
          <p>Description: Unleash creativity with painting, sculpture, and digital art.</p>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="featured-courses">
        <h3>Featured Courses</h3>
        <p>Check out some of our most popular courses that inspire students to excel and explore new interests.</p>
      </div>

      {/* Faculty Introduction */}
      <div className="faculty-intro">
        <h3>Meet Our Faculty</h3>
        <p>Our faculty members are experienced and dedicated to providing quality education to all students. Learn more about their qualifications and expertise.</p>
      </div>

      {/* Enrollment Information */}
      <div className="enrollment-info">
        <h3>Admissions & Enrollment</h3>
        <p>Follow the steps for enrolling in courses, including application procedures and important deadlines.</p>
      </div>

      {/* Resources & Support */}
      <div className="resources-support">
        <h3>Resources & Support</h3>
        <p>We provide tutoring, academic advising, and additional resources to help students succeed.</p>
      </div>

      {/* FAQ */}
      <div className="faq">
        <h3>Frequently Asked Questions</h3>
        <p>Find answers to common questions about our courses, policies, and resources.</p>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>If you have any questions about specific courses, please reach out to our admissions office.</p>
      </div>
    </div>
  );
};

export default Courses;
