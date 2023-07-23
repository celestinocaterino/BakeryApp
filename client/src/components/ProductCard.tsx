import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface ProductProps {
  post: {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string
    discount: number
    to_remove: number
  };
}

export default function ProductCard(props: ProductProps) {

  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card>
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random?pie"
        alt="Paella dish"
      />
      <CardContent>
        <Typography sx={{ mb: 2 }} variant="h6" color="text.primary">
          {post.name}
        </Typography>
        {post.discount ?
          <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
            <del>{post.price}</del> {post.discount} <small>{post.currency}</small>
          </Typography>
          :
          <Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
            {post.price} <small>{post.currency}</small>
          </Typography>
        }
      </CardContent>
      <CardActions disableSpacing sx={{
        alignSelf: "stretch",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}>
        <Link to={"/products/"+post.id}>
          {post.to_remove ?
            null
            :
            <Button variant="outlined" size="small">
              BUY
            </Button>
          }
          
        </Link>
      </CardActions>
    </Card>
  </Grid>
  );
}