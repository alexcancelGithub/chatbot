export interface Stock {
    code: string;
    stockName: string;
    price: number;
  }
  
  export interface StockExchange {
    code: string;
    stockExchange: string;
    topStocks: Stock[];
  }
  
  export const exchanges = ['LSE', 'NYSE', 'NASDAQ'];
