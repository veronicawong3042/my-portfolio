import React, { useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function App() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
}

export default App;