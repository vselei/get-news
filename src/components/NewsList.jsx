import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Pagination, Stack } from '@mui/material';
import useNews from '../hooks/useNews';
import News from './News';

const NewsList = () => {
  const { news, newsTotal, handleChangePagination, page } = useNews();
  const pages = Math.ceil(newsTotal / 9);

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
      <Stack
        spacing={2}
        direction="row"
        justifyContent={'center'}
        alignItems={'center'}
        marginY={5}
      >
        <Pagination
          count={pages}
          color={'primary'}
          onChange={handleChangePagination}
          page={page}
        />
      </Stack>
    </>
  );
};

export default NewsList;
