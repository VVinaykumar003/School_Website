import React, { useEffect, useState } from "react";
import axios from "axios";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios
      .get("/api/achievements")
      .then((response) => {
        setAchievements(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the achievements!", error);
      });
  }, []);

  return (
    <div>
      <h1>Achievements</h1>
      <ul>
        {achievements.map((achievement) => (
          <li key={achievement._id}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            {achievement.image && (
              <img src={achievement.image} alt={achievement.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
