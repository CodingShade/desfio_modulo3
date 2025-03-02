import React from 'react';

interface RepoCardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const RepoCard: React.FC<RepoCardProps> = ({ name, description, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default RepoCard;