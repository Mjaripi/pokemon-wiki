import React from 'react';
import { useState } from 'react';
import { HeaderElement, BodyElement } from './components';
import { FilterElements } from './entities/details.types';

const App = () => {
  const [ filters, setFilters ] = useState({
    ids: [],
    types: [],
  } as FilterElements)

  return (
    <div className="font-mono p-5 h-screen">
      <HeaderElement filters={ filters } />
      <BodyElement filters={ filters } setFilters={ setFilters }/>
    </div>
  );
}

export default App;
