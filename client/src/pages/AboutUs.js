import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import image from '../Assets/image.png';
import Instagram from '../Assets/instagram.png';
import Twitter from '../Assets/twitter.png';
import '../style/About.css';

const AboutUs = () => {
  return (
    <div>
      <div>
      <h1 className="about">Our Journey</h1>
      <p className="journey">Founded with a vision to make quality education accessible, Zager Public School has become a leader in eLearning. We support schools and educators in delivering engaging online learning experiences.</p>
      </div>

      <Container maxWidth="lg" className="education-commitment">
      {/* Main Title */}
      <Typography variant="h3" component="h2" className="commitment-title">
        Our Commitment to Education
      </Typography>

      {/* Description */}
      <Typography variant="body1" className="commitment-description">
        At Zager Public School, we strive to empower educators and learners with
        innovative eLearning solutions. Our mission is to enhance the
        educational experience and foster collaboration, ensuring that quality
        education is accessible to all.
      </Typography>

      {/* Statistics and Image */}
      <Grid container spacing={4} className="stats-image-section">
        {/* Statistics */}
        <Grid item xs={12} md={6} className="statistics-section">
          <Box className="stat-box">
            <Typography variant="h4" className="stat-value">
              100%
            </Typography>
            <Typography variant="body1" className="stat-description">
              We believe in Accessibility, Innovation, and Collaboration. Our
              platform continuously evolves to meet the needs of diverse
              learners, creating a supportive environment for all.
            </Typography>
          </Box>
          <Box className="stat-box">
            <Typography variant="h4" className="stat-value">
              500 courses
            </Typography>
            <Typography variant="body1" className="stat-description">
              With a focus on innovation, we leverage the latest technology to
              improve our offerings, ensuring that educators have the tools they
              need to create engaging lesson plans.
            </Typography>
          </Box>
          <Box className="stat-box">
            <Typography variant="h4" className="stat-value">
              200 educators
            </Typography>
            <Typography variant="body1" className="stat-description">
              Our collaborative approach encourages teamwork among educators and
              students, fostering a community that supports learning and growth.
            </Typography>
          </Box>
          <Box className="stat-box">
            <Typography variant="h4" className="stat-value">
              1000 students
            </Typography>
            <Typography variant="body1" className="stat-description">
              Join us in transforming the future of learning with our
              comprehensive eLearning platform, designed to support schools and
              educational institutions in delivering high-quality online
              education.
            </Typography>
          </Box>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6} className="image-section">
          <img src={image} alt="Classroom" className="classroom-image" />
        </Grid>
      </Grid>
    </Container>
  


          <div className="teamContainer">
                <div>
                  <p>
                  <h1>Our dedicated faculty brings a wealth of knowledge and experience to our eLearning platform, ensuring quality education for all students.</h1></p>
                </div>

       
             
                  <div className="facality">
                    {/* 1st */}
                        <div className="card-container">
                          <img src={image} alt="image" className="card-image"/>
                          <h1  className="card-title">Dr. Emily Johnson </h1>
                          <h3 className="card-title">Chief Executive Offier</h3>
                          <p className="card-description">With over 15 years of experience in education technology, Dr. Johnson leads the vision and strategy of Zager Public School.</p>
                              <div className="link-container">
                              <a href="Instagram.com" className="card-btn"><img src={Instagram }alt='Instagram'/></a>
                              <a href="Instagram.com" className="card-btn"><img src={Twitter}alt='Twitter'/></a>
                              </div>
                      </div>
                  
                {/* 2nd */}
                 <div>
                    <div className="card-container">
                    <img src={image} alt="image" className="card-image"/>
                    <h1  className="card-title">Dr. Emily Johnson </h1>
                    <h3 className="card-title">Chief Executive Offier</h3>
                    <p className="card-description">With over 15 years of experience in education technology, Dr. Johnson leads the vision and strategy of Zager Public School.</p>
                        <div className="link-container">
                        <a href="Instagram.com" className="card-btn"><img src={Instagram }alt='Instagram'/></a>
                        <a href="Instagram.com" className="card-btn"><img src={Twitter}alt='Twitter'/></a>
                        </div>
                  </div>
              </div>

              {/* 3rd */}
              <div>
                  <div className="card-container">
                  <img src={image} alt="image" className="card-image"/>
                  <h1  className="card-title">Dr. Emily Johnson </h1>
                  <h3 className="card-title">Chief Executive Offier</h3>
                  <p className="card-description">With over 15 years of experience in education technology, Dr. Johnson leads the vision and strategy of Zager Public School.</p>
                      <div className="link-container">
                      <a href="Instagram.com" className="card-btn"><img src={Instagram }alt='Instagram'/></a>
                      <a href="Instagram.com" className="card-btn"><img src={Twitter}alt='Twitter'/></a>
                      </div>
                </div>
              </div>

              {/* 4th */}
              <div>
                  <div className="card-container">
                  <img src={image} alt="image" className="card-image"/>
                  <h1  className="card-title">Dr. Emily Johnson </h1>
                  <h3 className="card-title">Chief Executive Offier</h3>
                  <p className="card-description">With over 15 years of experience in education technology, Dr. Johnson leads the vision and strategy of Zager Public School.</p>
                      <div className="link-container">
                      <a href="Instagram.com" className="card-btn"><img src={Instagram }alt='Instagram'/></a>
                      <a href="Instagram.com" className="card-btn"><img src={Twitter}alt='Twitter'/></a>
                      </div>
                </div>
              </div>
              


              </div>
            {/* JOin our team */}
        <div className="bottom">
          <h1>Join our team</h1>
          <p> Explore exciting career opportunities and help shape the future of education.</p>
          <button>Learn More</button>
        </div>
        
     
     </div>
     </div>
   
     
    
  );
};


export default AboutUs;
