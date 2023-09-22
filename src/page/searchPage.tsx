import React, { useState, useEffect } from 'react';
import SearchInput from '../components/searchButton';
import { PageContainer, Title } from '../style/style';

const SearchPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <PageContainer hidden ={isVisible}>
      <Title>Search Username</Title>
      <SearchInput />
    </PageContainer>
  );
};

export default SearchPage;
