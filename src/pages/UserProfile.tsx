import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

interface User {
  avatar_url: string;
  name: string;
  bio: string;
}

interface Repo {
  name: string;
  description: string;
  visibility: string;
  html_url: string;
  language: string;
}

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(`https://api.github.com/users/${username}`);
        setUser(userResponse.data);

        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(reposResponse.data);
      } catch (err) {
        setError('Erro ao buscar dados do usuário.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <p className="loading">Carregando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="user-profile">
      <Header />
      {user && (
        <div className="user-info">
          <img src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      )}
      <h3>Repositórios</h3>
      <div className="repo-list">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="repo-card"
            onClick={() => setSelectedRepo(repo)}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description || "Sem descrição."}</p>
          </div>
        ))}
      </div>
      {selectedRepo && (
        <div className="modal-overlay">
          <div className="repo-modal">
            <h2>{selectedRepo.name}</h2>
            <p>{selectedRepo.description || "Sem descrição."}</p>
            <p><strong>Visibilidade:</strong> {selectedRepo.visibility}</p>
            <p><strong>Linguagem:</strong> {selectedRepo.language || "Não especificada."}</p>
            <a href={selectedRepo.html_url} target="_blank" rel="noopener noreferrer">
              🔗 Acessar Projeto
            </a>
            <button onClick={() => setSelectedRepo(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;