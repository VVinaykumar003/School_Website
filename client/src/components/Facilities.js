
import React from 'react';

const SchoolFacilities = () => {
    return (
        <div style={styles.facilitiesContainer}>
            <div style={styles.facilitiesList}>
                <h1 style={styles.heading}>List of School Facilities</h1>
                <ul style={styles.list}>
                    <li>&#x2022;  8 Dedicated Science Labs</li>
                    <li>&#x2022;  Information and Communication Technology Labs – ICT labs</li>
                    <li>&#x2022;  Classrooms with interactive Promethean Boards</li>
                    <li>&#x2022;  Robotics Lab</li>
                    <li>&#x2022;  Food Tech lab - the first of its kind in an American school in Dubai</li>
                    <li>&#x2022;  Makers room for design thinking and project based - learning</li>
                    <li>&#x2022;  Outdoor football field, basketball court</li>
                    <li>&#x2022;  Indoor sports hall</li>
                    <li>&#x2022;  Shaded outdoor play areas</li>
                    <li>&#x2022;  Swimming pool</li>
                    <li>&#x2022;  Indoor Multipurpose Hall</li>
                    <li>&#x2022;  3 Libraries</li>
                    <li>&#x2022;  Art, Music and Drama room</li>
                    <li>&#x2022;  Science Art lab</li>
                </ul>
            </div>
            <div style={styles.facilitiesImage}>
                <img src="mission.jpg" alt="Students with robot" style={styles.image} />
            </div>
        </div>
    );
};

const styles = {
    facilitiesContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        // boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    facilitiesList: {
        maxWidth: '60%',
    },
    heading: {

        fontSize: '2.5em',
        color: '#1E2A5A', // Adjust color to match screenshot
        margintop: '2px',
    },
    list: {
        listStyleType: 'none',
        paddingLeft: 0,
        lineHeight: '1.8',
        color: '#333',
    },
    facilitiesImage: {
        maxWidth: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        // margintop: '100px',
        maxWidth: '105%',
        alignItems:'center',
        borderRadius: '8px',
        
    },
};

export default SchoolFacilities;
