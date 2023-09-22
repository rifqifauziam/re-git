import React, { useState } from 'react';
import { fetchUserData, fetchUserRepos } from '../helpers/apiDataSource';
import { GitHubUser, GitHubRepo } from '../interfaces/github';
import {
  Button,
  CloseButton,
  Input,
  ModalContainer,
  ModalContent,
} from '../style/style';
import { Link } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    if (username) {
      const userData = await fetchUserData(username);
      if (userData) {
        setUser(userData);
        const userRepos = await fetchUserRepos(username);
        if (userRepos.length > 0) {
          setRepos(userRepos);
          setNotFound(false);
        } else {
          setNotFound(true);
          setModalVisible(true);
          setUser(null);
          setRepos([]);
        }
      } else {
        setNotFound(true);
        setModalVisible(true);
        setUser(null);
        setRepos([]);
      }
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <><div>
      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={handleInputChange} />
      <Button onClick={handleSearch}>Search</Button>
    </div>
    <div>
      {user && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3>User: {user.login}</h3>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s profile`}
            width="100"
            style={{ borderRadius: '50%', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)' }}
          />
        </div>
      )}
      {repos.length > 0 && (
        <div>
          <h3>Repositories:</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {repos.map((repo) => (
              <li key={repo.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <strong>{repo.name}</strong>
                <p>{repo.description ? repo.description : 'No Description'}</p>
                <Link to={`/project/${user?.login}/${repo.name}`}>View Details</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ModalContainer visible={modalVisible}>
        <ModalContent>
          <h2>Result Not Found</h2>
          <p>No user or repositories found for the provided username.</p>
          <CloseButton onClick={closeModal}>Close</CloseButton>
        </ModalContent>
      </ModalContainer>
    </div></>
  );
};

export default SearchPage;
