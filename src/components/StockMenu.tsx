import React from 'react';
import { Button, Box } from '@mui/material';
import { useChatContext } from '../context/ChatContext';

const StockMenu = () => {
  const { setSelectedExchange } = useChatContext();

  const handleExchangeSelect = (exchange: string) => {
    setSelectedExchange(exchange);
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => handleExchangeSelect('LSE')}>
        London Stock Exchange
      </Button>
      <Button variant="contained" onClick={() => handleExchangeSelect('NASDAQ')}>
        Nasdaq
      </Button>
      <Button variant="contained" onClick={() => handleExchangeSelect('NYSE')}>
        New York Stock Exchange
      </Button>
    </Box>
  );
};

export default StockMenu;
