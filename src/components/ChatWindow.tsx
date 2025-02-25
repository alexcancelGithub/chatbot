import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import StockMenu from './StockMenu';
import StockList from './StockList';
import { useChatContext } from '../context/ChatContext';
import { getStockData } from '../utlis/api';

const ChatWindow = () => {
  const { selectedExchange, setStocks } = useChatContext();

  useEffect(() => {
    if (selectedExchange) {
      getStockData(selectedExchange).then((data) => {
        setStocks(data);
      });
    }
  }, [selectedExchange, setStocks]);

  return (
    <Box>
      <h1>Welcome to the Stock Chatbot</h1>
      <StockMenu />
      {selectedExchange && <StockList />}
    </Box>
  );
};

export default ChatWindow;
