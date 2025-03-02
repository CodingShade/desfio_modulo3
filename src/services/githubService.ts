const BASE_URL = 'https://api.github.com/users';

export const getUser = async (username: string) => {
  const response = await fetch(`${BASE_URL}/${username}`);
  if (!response.ok) throw new Error('Usuário não encontrado');
  return response.json();
};

export const getUserRepos = async (username: string) => {
  const response = await fetch(`${BASE_URL}/${username}/repos`);
  if (!response.ok) throw new Error('Erro ao buscar repositórios');
  return response.json();
};