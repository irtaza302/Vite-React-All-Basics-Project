import React from 'react';
import { Button, Typography, Box } from '@mui/material';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrement, onDecrement }) => (
  <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
    <Typography variant="h6" gutterBottom>
      Counter
    </Typography>
    <Typography variant="body1" gutterBottom>
      Count: {count}
    </Typography>
    <Button variant="contained" onClick={onIncrement} sx={{ mr: 1 }}>
      Increment
    </Button>
    <Button variant="contained" onClick={onDecrement}>
      Decrement
    </Button>
  </Box>
);

export default Counter;

