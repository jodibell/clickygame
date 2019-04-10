import React, { Component } from 'react';
import './App.css';
import colors from "./colors";
import ColorCard from "./components/ColorCard";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Clicky Game</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>Click an image to begin!</li>
              <li>
                "Score: "
                "0"
                " | Top Score: "
                "0"
            </li>
            </ul>
          </div>
        </nav>
        <Wrapper>
        <div className="colorgrid" style={{display: "flex", flexWrap: "wrap"}}>
            {colors.map(function (xx, i) {
              return <ColorCard
                key={xx.id}
                name={xx.name}
                image={xx.image}
              />
            })}
            {console.log(colors)}
        </div>
        </Wrapper>
      </div>
    )
  }
}

export default App;


