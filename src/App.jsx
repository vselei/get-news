import { Container, Grid, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <header>
        <Typography
          align="center"
          marginY={5}
          component='h1' variant='h3'
        >
          Buscador de Notícias
        </Typography>
      </header>
    </Container>
  );
};

export default App;
