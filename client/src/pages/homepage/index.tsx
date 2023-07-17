import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import ProductCard from './../../components/ProductCard';

const products = [
  {
    id: '1',
    name: 'Featured post',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    price: '10',
  },
  {
    id: '2',
    name: 'Post title',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    price: '20',
  },
];

export default function Homepage() {
  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Bakery App" />
        <main>
          <Grid container spacing={4}>
            {products.map((product) => (
              <ProductCard key={product.name} post={product} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        description="Bakery App by Luana e Maria!"
      />
    </div>
  );
}