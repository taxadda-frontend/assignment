import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Button from './components/Button';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Invoices from './pages/Invoices';
import Create from './pages/Create';

function App() {
  return (
    <Router>
      <Container>
        <Header/>
        <Routes>
          <Route path='/invoices' element={<Invoices/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>   
      </Container>
    </Router>
  );
}

export default App;
