import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Outlet data-testid="outlet" />
    </div>
  );
}

export default App;
