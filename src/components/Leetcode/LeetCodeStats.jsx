import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import styles from "./LeetCodeStats.module.css";

const LeetCodeStats = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
        );
        if (!userResponse.ok) {
          throw new Error(`User API Error: ${await userResponse.text()}`);
        }
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch calendar data
        const calendarResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/userProfileCalendar?username=${username}&year=2024`
        );
        if (!calendarResponse.ok) {
          throw new Error(`Calendar API Error: ${await calendarResponse.text()}`);
        }
        const rawCalendarData = await calendarResponse.json();

        // Transform raw calendar data into heatmap data
        const processedCalendarData = Object.keys(rawCalendarData).map((timestamp) => ({
          date: new Date(parseInt(timestamp) * 1000), // Convert UNIX timestamp to JS Date
          count: rawCalendarData[timestamp],
        }));

        setCalendarData(processedCalendarData);
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!userData || calendarData.length === 0)
    return <div className={styles.noData}>No data available.</div>;

  const maxCount = Math.max(...calendarData.map((d) => d.count), 0);

  return (
    <Card className={styles.leetcodeStats}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          LeetCode Stats for {username}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* User Stats */}
        <div className={styles.statsGrid}>
          <StatItem title="Total Solved" value={userData.totalSolved} />
          <StatItem title="Ranking" value={userData.ranking} />
          <StatItem title="Easy Solved" value={userData.easySolved} />
        </div>

        {/* Heatmap */}
        <div className={styles.heatmapContainer}>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CalendarIcon className="mr-2" />
            Yearly Submission Calendar (2024)
          </h3>
          <div className={styles.heatmap}>
            {generateHeatmap(calendarData, maxCount)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const StatItem = ({ title, value }) => (
  <div className={styles.statItem}>
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const generateHeatmap = (data, maxCount) => {
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");
  const dayMap = new Map();

  // Map the data by date
  data.forEach((day) => {
    const dateStr = day.date.toISOString().split("T")[0];
    dayMap.set(dateStr, day.count);
  });

  const weeks = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const count = dayMap.get(dateStr) || 0;

      week.push(
        <div
          key={dateStr}
          className={styles.day}
          style={{ backgroundColor: getColor(count, maxCount) }}
          title={`${dateStr} - Submissions: ${count}`}
        />
      );

      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(
      <div key={currentDate} className={styles.week}>
        {week}
      </div>
    );
  }

  return weeks;
};

const getColor = (count, maxCount) => {
  if (count === 0) return "#ebedf0"; // Light gray for no submissions
  const intensity = count / maxCount; // Normalize intensity
  return `hsl(${120 * intensity}, 100%, ${50 + 25 * (1 - intensity)}%)`; // Green gradient
};

export default LeetCodeStats;
