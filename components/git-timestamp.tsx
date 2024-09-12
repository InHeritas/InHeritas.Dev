import React from 'react';

const GitTimestamp: React.FC<{ timestamp: Date }> = ({ timestamp }) => {
  const formattedTimestamp = timestamp.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return <span>Last updated: {formattedTimestamp}</span>;
};

export default GitTimestamp;