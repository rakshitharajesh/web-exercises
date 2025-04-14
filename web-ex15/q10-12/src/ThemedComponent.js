import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();

  const style = {
    padding: '20px',
    margin: '10px 0',
    borderRadius: '5px',
    color: theme === 'dark' ? '#fff' : '#333',
    backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
  };

  return <div style={style}>Current Theme: {theme.toUpperCase()}</div>;
};

export default ThemedComponent;
