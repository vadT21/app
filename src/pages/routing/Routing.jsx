import React from 'react';
import { 
  Routes, 
  Route,
} from 'react-router-dom';
import { 
  APP_PAGE_LINK, 
  NOT_FOUND_PAGE_LINK, 
  SETTINGS_PAGE_LINK,
} from '../../constants';
import CalculatorPage from '../calculatorPage/CalculatorPage';
import NotFound from '../notFoundPage/NotFoundPage';
import MainPage from '../mainPage/MainPage';
import SettingsPage from '../settingsPage/SettingsPage';

const Routing = () => {
  return (
    <Routes>
      <Route 
        path={APP_PAGE_LINK.link} 
        element={<MainPage />}
      >
        <Route 
          index 
          element={<CalculatorPage />} 
        />
        <Route 
          path={SETTINGS_PAGE_LINK.link}
          element={<SettingsPage />} 
        />
      </Route>
      <Route 
        path={NOT_FOUND_PAGE_LINK.link} 
        element={<NotFound />} 
      />
    </Routes>
  );
};

export default Routing;