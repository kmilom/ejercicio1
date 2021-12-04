import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import MisRutas from './MisRutas';
import GlobalContextProvider from './context/GlobalContext';

function App() {
  return (
    <Container fluid>
      <GlobalContextProvider>
      <BrowserRouter>
      <Header />
      <MisRutas/>
      </BrowserRouter>
      </GlobalContextProvider>
    </Container>
  );
}

export default App;
