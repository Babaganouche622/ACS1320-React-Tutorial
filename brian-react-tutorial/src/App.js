import logo from './logo.svg';
import './App.css';
import Title from './Title';
import CardList from './CardList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <img src={logo} alt='Logo' />
      <Title />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
