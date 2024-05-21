import React, { useState, useEffect } from 'react';
import LoginComponent from './components/logincomponent'; 
import AppComponent from './components/appcomponent'; 
import Axios from 'axios';

const MainApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add a useEffect to check the login status on component mount
  useEffect(() => {
    // Check the login status here, e.g., by making a request to your server
    const checkLoginStatus = async () => {
      try {
        
        // For example, you might make a request to the server to check if the user is authenticated

        // If the login is successful, update the state
        // For now, I'm assuming a successful login if the response is successful
        await Axios.get('/api/check-login');
        setIsLoggedIn(true);
      } catch (error) {
        // Handle the error or set isLoggedIn to false
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <div>
      {/* Conditionally render the LoginComponent or AppComponent based on the login status */}
      {isLoggedIn ? <AppComponent /> : <LoginComponent />}
    </div>
  );
};

export default MainApp;
