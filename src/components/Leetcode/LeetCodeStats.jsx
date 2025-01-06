import React, { useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import './LeetCodeStats.css'; // Custom CSS for the calendar heatmap

const LeetCodeStats = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [calendarData, setCalendarData] = useState(null); // State to store the yearly calendar data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching the user profile data
        const userResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
        const userData = await userResponse.json();
        setUserData(userData); // Set the user data

        // Fetching the yearly submission calendar data
        const calendarResponse = await fetch(`https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=${username}&year=2024`);
        const calendarData = await calendarResponse.json();
        setCalendarData(calendarData); // Set the calendar data

      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  if (!userData || !calendarData) return <div>No data available.</div>;

  // Map the calendar data into the format expected by react-calendar-heatmap
  const heatmapData = Object.keys(calendarData).map(date => ({
    date: new Date(parseInt(date) * 1000), // Convert Unix timestamp to Date object
    count: calendarData[date], // Submission count for the day
  }));

  return (
    <div>
      <h2>User Stats</h2>

      <h3>Total Solved</h3>
      <p>{userData.totalSolved}</p>

      <h3>Total Submissions</h3>
      <p>{userData.totalSubmissions.length}</p>

      <h3>Total Questions</h3>
      <p>{userData.totalQuestions}</p>

      <h3>Easy Solved</h3>
      <p>{userData.easySolved}</p>

      <h3>Total Easy Questions</h3>
      <p>{userData.totalEasy}</p>

      <h3>Ranking</h3>
      <p>{userData.ranking}</p>

      <h3>Yearly Submission Calendar (2024)</h3>
      {/* Display the heatmap */}
      <CalendarHeatmap
        startDate={new Date('2024-01-01')} // Start of the year
        endDate={new Date('2024-12-31')}   // End of the year
        values={heatmapData} // The data for the heatmap
        showWeekdayLabels={true} // Optionally show weekday labels
        horizontal={false} // Make it vertical or horizontal
        classForValue={(value) => {
          const count = value ? value.count : 0;
          if (count === 0) return 'no-submission';
          if (count <= 1) return 'low-submission';
          if (count <= 3) return 'medium-submission';
          if (count <= 5) return 'high-submission';
          return 'very-high-submission';
        }}
        tooltipDataAttrs={(value) => {
          const date = value ? value.date : null; // Ensure date exists
          const dateString = date ? date.toLocaleDateString() : "No date"; // Check if date exists before calling toLocaleDateString
          return {
            'data-tip': `${dateString} - Submissions: ${value ? value.count : 0}`,
          };
        }}
      />
    </div>
  );
};

export default LeetCodeStats;
