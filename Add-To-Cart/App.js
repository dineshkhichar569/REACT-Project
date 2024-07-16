import './App.css';

import Cart from './Components/Cart';
import Items from './Components/Items';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>

    <div>
      <Items />
    </div>
    <div>
      <Cart/>
    </div>

    </>
  );
}

export default App;
