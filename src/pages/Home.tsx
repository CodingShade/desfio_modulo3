import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (username: string) => {
    if (username.trim()) {
      navigate(`/user/${username}`);
    }
  };

  return (
    <div className="home-container">
      <Header />
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;