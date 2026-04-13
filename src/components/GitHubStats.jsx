import React, { useEffect, useState } from 'react';
import './GitHubStats.scss';

const GitHubStats = ({ username }) => {
  const [user, setUser] = useState(null);
  const [langs, setLangs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);

        // Tally languages across all repos
        const langMap = {};
        reposData.forEach(repo => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
          }
        });
        const sorted = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6);
        const total = sorted.reduce((sum, [, v]) => sum + v, 0);
        setLangs(sorted.map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) })));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);

  if (loading) return <p className="gh-loading">Loading GitHub stats...</p>;
  if (error || !user) return null;

  return (
    <div className="gh-wrapper">
      <div className="gh-card">
        <h3>Stats</h3>
        <div className="gh-stat-grid">
          <div className="gh-stat">
            <span className="gh-stat-value">{user.public_repos}</span>
            <span className="gh-stat-label">Repositories</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-value">{user.followers}</span>
            <span className="gh-stat-label">Followers</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-value">{user.following}</span>
            <span className="gh-stat-label">Following</span>
          </div>
          <div className="gh-stat">
            <span className="gh-stat-value">{user.public_gists}</span>
            <span className="gh-stat-label">Gists</span>
          </div>
        </div>
      </div>

      <div className="gh-card">
        <h3>Top Languages</h3>
        <div className="gh-langs">
          {langs.map(({ name, pct }) => (
            <div key={name} className="gh-lang-row">
              <span className="gh-lang-name">{name}</span>
              <div className="gh-lang-bar-bg">
                <div className="gh-lang-bar-fill" style={{ width: `${pct}%` }} />
              </div>
              <span className="gh-lang-pct">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
