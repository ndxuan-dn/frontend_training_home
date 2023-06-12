import { Routes, Route, Link } from 'react-router-dom';

import Peoples from "./components/people";
import Counter from "./components/counter";
import Sinhviens from './components/sinhviens';

function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/people">List Peoples</Link></li>
          <li><Link to="/lissv">List Sinh Vien</Link></li>
          <li><Link to="/counter">Example counter</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Peoples />} />
        <Route path="/people" element={<Peoples />} />
        <Route path="/lissv" element={<Sinhviens />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
