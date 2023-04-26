import React from 'react';
import Header from './Header.jsx';
import TinderCards from './TinderCards.jsx';
import SwipeButtons from './SwipeButtons.jsx';

function App() {
  return (
    // BEM Naming Convension
    <div className='app'>
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  )
}

export default App