import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNews from '../hooks/useNews';
import News from './News';

const NewsList = () => {
  const { news } = useNews();
  console.log(news)

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h4" component="h2">
        Últimas Notícias
      </Typography>
      <Grid container direction='column'>
        {news.map(singleNews => (
          <News key={singleNews.url} news={singleNews} />
        ))}
      </Grid>
    </>
  );
};

export default NewsList;
