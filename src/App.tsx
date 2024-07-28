import { useState } from 'react';
import { HeaderElement, BodyElement } from './components';
import { emptyFilters } from './components/common';
import './App.css';

const App = () => {
  const [ filters, setFilters ] = useState(emptyFilters)

  return (
    <div className="p-5 h-screen">
      <HeaderElement filters={ filters } setFilters={ setFilters }/>
      <BodyElement filters={ filters } setFilters={ setFilters }/>
    </div>
  );
}

export default App;
