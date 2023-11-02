import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
<div>
{/* header create */}
<Header></Header>
  <Outlet></Outlet>
  {/* footer create */}
</div>
  );
};

export default App;