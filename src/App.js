import AppRouter from '././router/AppRouter';
import theme from './components/globalStyles/theme';
import {ThemeProvider} from 'styled-components';

function App() {
  return(
     <div>
  <ThemeProvider teheme={theme}>
  </div>
  )
}


export default App;
