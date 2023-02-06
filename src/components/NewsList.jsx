import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useNews from '../hooks/useNews';
import News from './News';

const NewsList = () => {
  const { news } = useNews();

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h4" component="h2">
        Últimas Notícias
      </Typography>
      <Grid container spacing={2}>
        {news.map(singleNews => (
          <News key={singleNews.url} news={singleNews} />
        ))}
      </Grid>
    </>
  );
};

export default NewsList;
