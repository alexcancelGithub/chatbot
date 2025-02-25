import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Stock } from '../utlis/constants';

interface ChatContextType {
  selectedExchange: string;
  setSelectedExchange: React.Dispatch<React.SetStateAction<string>>;
  stocks: Stock[];
  setStocks: React.Dispatch<React.SetStateAction<Stock[]>>;
}

interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [selectedExchange, setSelectedExchange] = useState('');
  const [stocks, setStocks] = useState<Stock[]>([]);

  return (
    <ChatContext.Provider value={{ selectedExchange, setSelectedExchange, stocks, setStocks }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};
