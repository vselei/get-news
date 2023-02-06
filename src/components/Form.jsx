import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box
} from '@mui/material';
import useNews from '../hooks/useNews';

const CATEGORIES = [
  { value: 'general', label: 'Geral' },
  { value: 'business', label: 'Negócios' },
  { value: 'entertainment', label: 'Entretenimento' },
  { value: 'health', label: 'Saúde' },
  { value: 'science', label: 'Ciência' },
  { value: 'sports', label: 'Esportes' },
  { value: 'technology', label: 'Tecnologia' }
];

const Form = () => {
  const { category, handleCategoryChange } = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoria</InputLabel>
        <Select
          label="Categoria"
          onChange={handleCategoryChange}
          value={category}
        >
          {CATEGORIES.map(cat => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </Select>
        <Box marginTop={2}>
          <Button fullWidth variant="contained" color="primary">
            Buscar Notícias
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Form;
