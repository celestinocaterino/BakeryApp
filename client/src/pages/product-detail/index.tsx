import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './../../components/Header';
import Footer from './../../components/Footer';

export default function ProductDetail() {
  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Bakery App" />
        <main>
          <Grid container spacing={4}>
            product
          </Grid>
        </main>
      </Container>
      <Footer
        description="Bakery App by Luana e Maria!"
      />
    </div>
  );
}