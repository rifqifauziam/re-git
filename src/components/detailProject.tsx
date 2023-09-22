import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchProjectReadme } from '../helpers/apiDataSource';
import { PageContainer, Title, UserDetails, Strong, NoReadmeMessage, ReadmeContainer } from '../style/style';

const ProjectDetailPage: React.FC = () => {
  const { userName, repoName } = useParams<{ userName: string; repoName: string }>();
  const [readmeContent, setReadmeContent] = useState<string | null>(null);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    fetchProjectReadme(userName, repoName)
      .then((readme) => {
        setReadmeContent(readme);
      })
      .catch((error) => {
        console.error('Error fetching readme:', error);
        setReadmeContent(null);
      });
      return () => clearTimeout(delay);
  }, [userName, repoName]);

  return (
    <PageContainer hidden ={isVisible}>
      <Title>Project Detail</Title>
      <UserDetails>
        <p>
          User: <Strong>{userName}</Strong>
        </p>
        <p>
          Repo Name: <Strong>{repoName}</Strong>
        </p>
      </UserDetails>
      {readmeContent ? (
        <><Title> Readme </Title><ReadmeContainer>
          <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </ReadmeContainer></>
        ) : (
        <NoReadmeMessage>No README found for this project.</NoReadmeMessage>
      )}
    </PageContainer>
  );
};

export default ProjectDetailPage;
