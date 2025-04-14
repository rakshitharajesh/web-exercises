import React from 'react';
import FocusForm from './FocusForm';

import { ThemeProvider, useTheme } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

import UserForm from './UserForm';
import UserFormWithRef from './UserFormWithRef';


const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
	   
        <h1>React Theme Switcher with Context</h1>
        <ThemeToggleButton />
		<FocusForm />
        <ThemedComponent />
        <ThemedComponent />
		<UserForm />
		<UserFormWithRef />
      </div>
    </ThemeProvider>
  );
};

export default App;
