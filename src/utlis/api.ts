import stockData from '../data/stockData.json';

export const getStockData = async (exchange: string) => {
  const exchangeData = stockData.find((data) => data.code === exchange);
  if (exchangeData) {
    return exchangeData.topStocks;
  }
  return [];
};
