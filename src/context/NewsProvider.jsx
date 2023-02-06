import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [newsTotal, setNewsTotal] = useState(0);

  useEffect(() => {
    const requestAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=br&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const {
        data: { articles, totalResults }
      } = await axios(url);
      setNews(articles);
      setNewsTotal(totalResults);
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
