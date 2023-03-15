import React, { useState, useEffect } from 'react';

function App() {
  const [resultFinal, setResultFinal] = useState('');

  useEffect(() => {
    const file = new File([JSON.stringify({ resultFinal: '0.03' })], '../api/data.json', { type: 'application/json' });
    const reader = new FileReader();
    reader.onload = (event) => {
      const json = JSON.parse(event.target.result);
      setResultFinal(json.resultFinal);
    };
    reader.readAsText(file);

    const watchFile = () => {
      const watcher = new FileReader();
      watcher.onload = (event) => {
        const json = JSON.parse(event.target.result);
        setResultFinal(json.resultFinal);
      };
      watcher.readAsText(file);
      setTimeout(watchFile, 1000);
    };

    watchFile();
  }, []);

  return (
    <div>
      <h1>Resultado Final: {resultFinal}</h1>
    </div>
  );
}

export default App;
