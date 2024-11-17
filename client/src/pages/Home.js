<<<<<<< HEAD
import React from 'react'
// import FacultyCards from '../components/faculty'
// import MissionVision from '../components/Mission'
// import Facilities from '../components/Facilities'
// import FacilitiesG from '../components/FacilitiesG'
import Carousel from '../components/Carousel'
import NotificationPanel from '../components/NotificationPanel'
=======
import React from "react";
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2

const Home = () => {
  const [currentNotification, setCurrentNotification] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mock to simulate fetching recent notification
    const interval = setInterval(() => {
      setCurrentNotification(
        mockNotifications[Math.floor(Math.random() * mockNotifications.length)]
      );
    }, 3000); // Change notification every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <>
    <Carousel/>
    <div>
    <NotificationPanel/>
    </div>
    </>
  )
}
=======
    <div>
      <h1>Welcome to the School Website</h1>
      <p>Explore our achievements, notifications, and upcoming events!</p>
    </div>
  );
};
>>>>>>> 8f00e1760bf40b6eb9bc7291846c9d76a3fa96d2

export default Home