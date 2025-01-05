import React, { useState, useEffect } from 'react';
import { LeetCode, Credential, fetcher } from 'leetcode-query';
import { chromium } from 'playwright';

// Setup custom fetcher with Playwright
const setupCustomFetcher = async (browser) => {
  const _page = await browser.newPage();
  await _page.goto("https://leetcode.com");

  fetcher.set(async (...args) => {
    const res = await _page.evaluate(async (args) => {
      const res = await fetch(...args);
      return {
        body: await res.text(),
        status: res.status,
        statusText: res.statusText,
        headers: Object.fromEntries(res.headers),
      };
    }, args);

    return new Response(res.body, res);
  });
};

const LeetCodeStats = ({ username, sessionCookie }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [dailyChallenge, setDailyChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [browser, setBrowser] = useState(null);

  // Fetch user profile
  const fetchUserProfile = async () => {
    try {
      const leetcode = new LeetCode();
      const profile = await leetcode.user(username);
      setUserProfile(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  // Fetch user submissions
  const fetchUserSubmissions = async () => {
    try {
      const credential = new Credential();
      await credential.init(sessionCookie);

      const leetcode = new LeetCode(credential);
      const submissions = await leetcode.submissions(100, 0); // Fetch first 100 submissions
      setSubmissions(submissions);
    } catch (error) {
      console.error('Error fetching user submissions:', error);
    }
  };

  // Fetch daily challenge
  const fetchDailyChallenge = async () => {
    try {
      const lc = new LeetCode();
      const daily = await lc.daily();
      setDailyChallenge(daily);
    } catch (error) {
      console.error('Error fetching daily challenge:', error);
    }
  };

  useEffect(() => {
    const initializeBrowser = async () => {
      const _browser = await chromium.launch();  // Launch Playwright without stealth plugin
      setBrowser(_browser);
    };

    initializeBrowser();

    return () => {
      if (browser) {
        browser.close(); // Close the browser when the component unmounts
      }
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!browser) return;  // Ensure browser is initialized
  
      setLoading(true);
      await fetchUserProfile();
      await fetchUserSubmissions();
      await fetchDailyChallenge();
  
      await setupCustomFetcher(browser);  // Setup custom fetcher
      setLoading(false);
    };
  
    fetchData();
  }, [username, sessionCookie, browser]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>LeetCode Profile: {userProfile?.username}</h1>
      <h2>Recent Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>{submission.title}</li>
        ))}
      </ul>
      <h2>Daily Challenge</h2>
      <p>{dailyChallenge?.title}</p>
      <p>{dailyChallenge?.description}</p>
    </div>
  );
};

export default LeetCodeStats;
