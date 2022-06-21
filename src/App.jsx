import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <div className="cardWrapper">
          <div className="cardImage">
            <img src="image/1.jpg" />
          </div>
          <div className="cardTextWrap">
            <span className="title"></span>
            <span className="textContent"></span>
          </div>
        </div>
        <div className="cardWrapper">
          <div className="cardImage">
            <img src="image/2.jpg" />
          </div>
          <div className="cardTextWrap">
            <span className="title"></span>
            <span className="textContent"></span>
          </div>
        </div>
        <div className="cardWrapper">
          <div className="cardImage">
            <img src="image/3.jpg" />
          </div>
          <div className="cardTextWrap">
            <span className="title"></span>
            <span className="textContent"></span>
          </div>
        </div>
        {/*
        <div className="cardWrapper">
          <div className="cardImage">
            <img src="image/4.jpg" />
          </div>
          <div className="cardTextWrap">
            <span className="title"></span>
            <span className="textContent"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
