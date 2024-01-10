import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Router from './router/Router';
import { ApiProvider } from './common/context/api-context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApiProvider>
      <Router />
    </ApiProvider>
  );
}

export default App;
