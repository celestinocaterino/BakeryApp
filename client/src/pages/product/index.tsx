import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { getProduct } from '../../services/products/queries';
import { useMutation, useQuery } from 'react-query';
import { Routes, Route, useParams } from 'react-router-dom';

export default function ProductDetail() {

  let { id } = useParams();

  const {
    data: product,
    isLoading: productsLoading,
    refetch
  } = useQuery([], async () => getProduct(id as string));

  return (
    <Grid container spacing={4}>
      <Grid item md={6}>
        <img width="100%" src="https://source.unsplash.com/random?pie" />
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ mb: 2 }} variant="h2" color="text.primary">
          {product.name}
        </Typography>
        {product.discount ?
            <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
              <del>{product.price}</del> {product.discount} <small>{product.currency}</small>
            </Typography>
            :
            <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
              {product.price} <small>{product.currency}</small>
            </Typography>
          }
        <Typography sx={{ mb: 2 }} variant="body1" color="text.primary">
          {product.description}
        </Typography>
      </Grid>
    </Grid>
  );
}