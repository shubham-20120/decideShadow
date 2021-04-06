import { useState } from 'react';
import './App.css';

function App() {
  const [hori, onHori] = useState(10);
  const [vert, onVert] = useState(10);
  const [blur, onBlur] = useState(10);
  const [foreground, onForeground] = useState('cyan');
  const [background, onBackground] = useState('black');
  return (
    <div className="App">
      <div className="upper">
        <div className="sliders" style={{boxShadow: `${hori}px ${vert}px ${blur}px ${background}`, backgroundColor:`${foreground}`}}>
          <p className="marginUp">Horizontal</p>
          <input type="range" id="test5" min="-100" max="100" value={hori} onChange = {(e)=>onHori(e.target.value)} />
          <p className="marginUp">Vertical</p>
          <input type="range" id="test5" min="-100" max="100" value={vert} onChange = {(e)=>onVert(e.target.value)} />
          <p className="marginUp">Blur</p>
          <input type="range" id="test5" min="0" max="100" value={blur} onChange = {(e)=>onBlur(e.target.value)} />
          <div className="choose">
            <div className="color-classes">
            <p>Choose Blurring Color</p>
            <input className="color-palette" type="color" value={background} onChange = {(e)=>onBackground(e.target.value)}></input>
            </div>
            <div className="color-classes">
            <p>Choose Foreground Color</p>
            <input className="color-palette" type="color" value={foreground} onChange = {(e)=>onForeground(e.target.value)}></input>
            </div>
          </div>
        </div>
        <div className="show" style={{boxShadow: `${hori}px ${vert}px ${blur}px ${background}`, backgroundColor:`${foreground}`}}></div>
      </div>
      <div className="middle-display">
      <div className="displayProps" style={{display:'block'}}>
        <p>box-shadow: {hori}px {vert}px {blur}px {background};</p>
        <p>background: {foreground};</p>
      </div>
      </div>
    </div>

  );
}

export default App;
