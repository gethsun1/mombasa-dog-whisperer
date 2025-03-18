import { Typography, Button } from '@mui/material';

export default function HomePage() {
  return (
    <main>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Mombasa Dog Whisperer
      </Typography>
      <Typography variant="body1">
        Your professional dog training and handling services in Mombasa.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Book Now
      </Button>
    </main>
  );
}
