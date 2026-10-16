import { useEffect, useState } from 'react';
import './GitHubStats.scss';

// Compact GitHub row: a few honest numbers, no giant chart.
const GitHubStats = ({ username }) => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`),
        ]);
        if (!userRes.ok || !reposRes.ok) return;
        const user = await userRes.json();
        const repos = await reposRes.json();

        const SKIP = new Set(['HTML', 'CSS', 'SCSS']);
        const langMap = {};
        let stars = 0;
        repos.forEach(r => {
          if (r.language && !SKIP.has(r.language)) langMap[r.language] = (langMap[r.language] || 0) + 1;
          stars += r.stargazers_count || 0;
        });
        const topLangs = Object.entries(langMap)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3)
          .map(([name]) => name);

        // Only brag about recency when it's actually recent
        const newest = repos[0]?.pushed_at ? new Date(repos[0].pushed_at) : null;
        const lastPush = newest && Date.now() - newest.getTime() < 60 * 86400000 ? newest : null;

        if (!cancelled) {
          setStats({
            repos: user.public_repos,
            followers: user.followers,
            stars,
            topLangs,
            lastPush,
          });
        }
      } catch {
        // Stay quiet; the section just shows the link.
      }
    })();
    return () => { cancelled = true; };
  }, [username]);

  const relative = date => {
    const days = Math.floor((Date.now() - date.getTime()) / 86400000);
    const plural = (n, unit) => `${n} ${unit}${n === 1 ? '' : 's'} ago`;
    if (days <= 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return plural(days, 'day');
    if (days < 30) return plural(Math.floor(days / 7), 'week');
    return plural(Math.floor(days / 30), 'month');
  };

  const list = items =>
    items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items[0];

  return (
    <div className="gh">
      {stats && (
        <p className="gh-summary">
          <b>{stats.repos}</b> public repos, <b>{stats.stars}</b> stars, <b>{stats.followers}</b> followers.
          {stats.topLangs.length > 0 && <> Mostly {list(stats.topLangs)}.</>}
          {stats.lastPush && <> Last push {relative(stats.lastPush)}.</>}
        </p>
      )}
      <a
        className="gh-link"
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
        github.com/{username}
      </a>
    </div>
  );
};

export default GitHubStats;
