import React, { useState } from 'react'
import { Button, Typography, Box } from '@mui/material'

const UseStateExample: React.FC = () => {
  // useState hook for managing a counter
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        useState Example
      </Typography>
      <Typography variant="body1" gutterBottom>
        Count: {count}
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </Box>
  )
}

export default UseStateExample
