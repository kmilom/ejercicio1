import './App.css';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import MisRutas from './MisRutas';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
      <Header />
      <MisRutas/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
