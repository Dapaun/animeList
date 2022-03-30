import './App.css';
import React from 'react';

function App() {
  React.useEffect(() => {
    fetch('https://api.aniapi.com/v1/anime/11')
      .then(response => response.json())
      .then(json => console.log(json))
  },[])
  return (
    <div className="App">
      Main page
    </div>
  );
}

export default App;
