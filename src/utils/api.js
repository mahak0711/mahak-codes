// api.js

// Function to fetch user profile details
export async function fetchUserProfile(username) {
    const apiUrl = `https://alfa-leetcode-api.onrender.com/userProfile/${username}`; // Full profile endpoint
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        console.error(`Error: ${response.statusText}`);
        throw new Error(`Failed to fetch user profile. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error; // Rethrow the error for further handling
    }
  }
  
  // Function to fetch year calendar details
  export async function fetchYearCalendar(username, year = 2024) {
    const apiUrl = `https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=${username}&year=${year}`; // Year calendar endpoint
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        console.error(`Error: ${response.statusText}`);
        throw new Error(`Failed to fetch year calendar. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching year calendar:', error);
      throw error; // Rethrow the error for further handling
    }
  }
  