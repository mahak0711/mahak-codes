import React, { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils"; // Utility function for class names

// Define a function to fetch GitHub contributions
function fetchGitHubContributions(username) {
  const GITHUB_API_URL = 'https://api.github.com/graphql';
  const GITHUB_TOKEN = import.meta.env.REACT_APP_GITHUB_TOKEN; // Use a secure environment variable

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  return fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { username } }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch contributions');
      }
      return response.json();
    })
    .then(data => data.data.user.contributionsCollection.contributionCalendar)
    .catch(error => {
      console.error('Error fetching GitHub contributions:', error);
      return null;
    });
}

export function GitHubContributionCalendar({ username }) {
  const [contributions, setContributions] = useState(null);

  useEffect(() => {
    async function fetchContributions() {
      const data = await fetchGitHubContributions(username);
      setContributions(data);
    }
    fetchContributions();
  }, [username]);

  if (!contributions) {
    return <div className="text-gray-800">Loading contributions...</div>;
  }

  // Create a map of contributions for each date
  const contributionMap = new Map();
  contributions.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      contributionMap.set(day.date, day.contributionCount);
    });
  });

  // Determine the color based on contribution count
  const getContributionColor = (date) => {
    const count = contributionMap.get(date.toISOString().split('T')[0]) || 0;
    if (count === 0) return 'bg-gray-100';
    if (count < 5) return 'bg-green-200';
    if (count < 10) return 'bg-green-300';
    return 'bg-green-500';
  };

  return (
    <div>
      <Calendar
        mode="multiple"
        selected={[]}
        className="rounded-md border"
        components={{
          Day: ({ date, ...props }) => (
            <div
              {...props}
              className={cn(
                'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
                getContributionColor(date)
              )}
            />
          ),
        }}
      />
      <p className="text-sm text-gray-600 mt-2">
        Total contributions: {contributions.totalContributions}
      </p>
    </div>
  );
}
