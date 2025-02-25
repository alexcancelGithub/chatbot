import React from 'react';
import { Box, Typography } from '@mui/material';
import { useChatContext } from '../context/ChatContext';

const StockList = () => {
  const { stocks } = useChatContext();

  if (stocks.length === 0) {
    return <Typography>No stocks available.</Typography>;
  }

  return (
    <Box>
      {stocks.map((stock) => (
        <Box key={stock.code}>
          <Typography>{stock.stockName} ({stock.code})</Typography>
          <Typography>Price: ${stock.price.toFixed(2)}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StockList;
