import './content/scss/index.scss';

import { ChakraProvider } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import { commonRoutes } from './config/router/commonRoutes';
import MainLayout from './layout/main/MainLayout';

function App() {
  const renderRoutes = (routes) => {
    return routes.map((route) => <Route path={route.path} element={route.component} key={route.path} />);
  };

  return (
    <ChakraProvider>
      <Routes>
        <Route element={<MainLayout />} path="/">
          {renderRoutes(commonRoutes)}
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
