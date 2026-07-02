import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [click, setClick] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setClick(click+1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <br /><br />
      <p>Total Clicks: <b>{click}</b></p>
    </div>
  );
}

export default App;
