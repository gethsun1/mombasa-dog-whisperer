import { Typography, Button, Box } from '@mui/material';

export default function Hero() {
  return (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Mombasa Dog Whisperer
      </Typography>
      <Typography variant="body1">
        Your professional dog training and handling services in Mombasa.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Book Now
      </Button>
    </Box>
  );
}
