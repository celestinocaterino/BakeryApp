import Grid from '@mui/material/Grid';
import ProductCard from './../../components/ProductCard';
import { getProducts } from '../../services/products/queries';
import { useQuery } from 'react-query';

export default function Homepage() {

  const {
    data: products,
    isLoading: productsLoading,
    refetch
  } = useQuery([], async () => getProducts());

  return (
    <Grid container spacing={4}>
      {products?.length > 0 
        ?
        products?.map((product: any) => (
          <ProductCard key={product.id} post={product} />
        ))
        :
        <p>No items</p>
      }
    </Grid>
  );
}