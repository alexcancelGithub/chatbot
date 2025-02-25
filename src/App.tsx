import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatWindow from './components/ChatWindow';
import { ChatProvider } from './context/ChatContext';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ChatWindow />} />
          </Routes>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
};

export default App;
