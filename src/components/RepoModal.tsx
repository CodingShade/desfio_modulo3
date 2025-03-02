import React from 'react';

interface RepoModalProps {
  repo: {
    name: string;
    description: string;
    visibility: string;
    html_url: string;
    language: string;
  };
  onClose: () => void;
}

const RepoModal: React.FC<RepoModalProps> = ({ repo, onClose }) => {
  return (
    <div style={{ position: 'fixed', top: '20%', left: '25%', width: '50%', padding: '20px', backgroundColor: '#fff', border: '1px solid #ccc' }}>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Visibilidade: {repo.visibility}</p>
      <p>Linguagem: {repo.language}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Acessar Projeto</a>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default RepoModal;