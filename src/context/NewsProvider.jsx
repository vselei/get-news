import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const requestAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const {
        data: { articles }
      } = await axios(url);
      setNews(articles);
    };
    requestAPI();
  }, [category]);

  const handleCategoryChange = e => setCategory(e.target.value);

  return (
    <NewsContext.Provider
      value={{
        handleCategoryChange,
        category,
        news
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
