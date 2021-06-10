import { Container } from 'react-bootstrap';
import Header from '../../frontend/src/components/Header';
import Footer from '../../frontend/src/components/Footer';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProductScreen from '../../frontend/src/Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import Login from './Screens/login';
import RegisterScreen from './Screens/RegisterScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
