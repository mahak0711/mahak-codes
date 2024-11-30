import React, { useEffect, useState } from 'react';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; 

async function fetchGitHubContributions(username) {
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

  const response = await fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch contributions');
  }

  const data = await response.json();
  return data.data.user.contributionsCollection.contributionCalendar;
}

function ContributionCalendar({ username }) {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      fetchGitHubContributions(username)
        .then((data) => {
          setContributions(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!contributions) return <div>No data available</div>;

  // Render the calendar component (this is a basic representation; you need to customize it)
  return (
    <div>
      <h2>Contribution Calendar for {username}</h2>
      <div>
        {contributions.weeks.map((week, index) => (
          <div key={index} style={{ display: 'flex' }}>
            {week.contributionDays.map((day, dayIndex) => (
              <div key={dayIndex} style={{ margin: '4px', padding: '8px', border: '1px solid black' }}>
                {day.contributionCount > 0 ? (
                  <span style={{ color: 'green' }}>✓</span>
                ) : (
                  <span style={{ color: 'gray' }}>-</span>
                )}
                <div>{new Date(day.date).getDate()}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributionCalendar;
