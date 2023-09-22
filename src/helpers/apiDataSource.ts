import axios from 'axios';
import { GitHubUser, GitHubRepo } from '../interfaces/github';
const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username: string): Promise<GitHubUser | null> => {
  try {
    const response = await axios.get<GitHubUser>(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get<GitHubRepo[]>(`${BASE_URL}/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    return [];
  }
};

export const fetchProjectReadme = async (username: any, repoName: any) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/repos/${username}/${repoName}/readme`,
      {
        headers: {
          Accept: 'application/vnd.github.v3.raw', // Request raw content
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching README:', error);
    throw error;
  }
};