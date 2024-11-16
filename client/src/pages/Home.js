import React from "react";

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
    <div>
      <h1>Welcome to the School Website</h1>
      <p>Explore our achievements, notifications, and upcoming events!</p>
    </div>
  );
};

export default Home