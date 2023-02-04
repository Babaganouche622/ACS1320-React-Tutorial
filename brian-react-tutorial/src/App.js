import logo from './logo.svg';
import './App.css';
import Title from './Title';
import CardList from './CardList';

function App() {
  return (
    <div className="App">
      <img src={logo} alt='Logo' />
      <Title />
      <CardList />
    </div>
  );
}

export default App;
