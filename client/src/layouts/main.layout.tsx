import Container from '@mui/material/Container';
import Header from './../components/Header';
import Footer from './../components/Footer';

export default function Main({ children }: { children: React.ReactElement }) {

  return (
    <div>
      <Container maxWidth="lg">
        <Header title="Bakery App" />
        <main>
          {children}
        </main>
      </Container>
      <Footer
        description="Bakery App by Luana e Maria!"
      />
    </div>
  );
}