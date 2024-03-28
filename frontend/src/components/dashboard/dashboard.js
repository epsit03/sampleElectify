import React, { useState, useEffect } from "react"; // Import useEffect for side effects
import axios from "axios";
import "./dashboard.css";

const Dashboard = ({ setLoginUser }) => {
  const [user, setUser] = useState({ name: "" }); // Initial empty user object

  // Fetch user data upon component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:5001/getUsers"); // Replace with your API endpoint
        console.log(response.data);
        setUser(response.data); // Update user state with fetched data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); // Run useEffect only once after component mounts

  return (
    <div className="dashboard">
      <h1>Welcome to {user[0]} App</h1>
      <div className="button" onClick={() => setLoginUser({})}>
        Logout
      </div>
    </div>
  );
};

export default Dashboard;