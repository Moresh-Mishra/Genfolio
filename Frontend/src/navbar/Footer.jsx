import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const location = useLocation();
  const [userData, setUserData] = useState(location.state || {});

  useEffect(() => {
    const fetchUserData = async () => {
      if (!location.state || Object.keys(location.state).length === 0) {
        try {
          const response = await fetch("/user");
          const data = await response.json();
          if (data && Object.keys(data).length > 0) {
            setUserData(data);
            console.log("Fetching Done");
          }
        } catch (error) {
          console.error("Error fetching user Data: ", error);
        }
      }
    };

    fetchUserData();
  }, [location.state]);

  return (
    <div className="flex flex-col items-center text-lg p-5 border-1 border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-center">© {year} {userData.fullName}. All rights reserved.</h1>
    </div>
  );
}

export default Footer;
