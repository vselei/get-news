import { useState, useEffect, createContext } from 'react';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');

  const handleCategoryChange = e => setCategory(e.target.value);

  return (
    <NewsContext.Provider
      value={{
        handleCategoryChange,
        category
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
