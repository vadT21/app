import { 
  Suspense, 
  lazy,
} from 'react';
import GlobalStyles from './styles/global';
import { 
  ThemeProvider,
} from 'styled-components';
import { 
  useSelector,
} from 'react-redux';
import ErrorBoundary from './errorBoundaries/ErrorBoundary';
import Loader from './components/other/loader/Loader';

const Routing = lazy( () => import('./pages/routing/Routing'));

const App = () => {

  const currentTheme = useSelector(state => state.themeReducer.theme);

  return (
    <ErrorBoundary>
      <Suspense fallback = {<Loader />}>
        <ThemeProvider theme={currentTheme}>
          <Routing />
          <GlobalStyles />
        </ThemeProvider>
      </Suspense> 
    </ErrorBoundary>
    
  );
};

export default App;
