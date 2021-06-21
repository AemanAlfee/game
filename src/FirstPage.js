import "./firstpage.css";
function FirstPage() {
  return (
    <div className="App">
      <div className="app-background">
        <div className="app-container">
          <div className="option-container">
            <h3 class="option-header">Connect Four</h3>
            <p class="option-desc">Play with other players around the world.</p>
            <div className="option-background">
              <div className="option-background-card">
                <div className="option-background-image" />
                <div className="option-background-image-circle1" />
                <div className="option-background-image-circle2" />
                <div className="option-play">Play</div>
              </div>
              <a href="/gamesettings">two players</a>
              <div className="option-copyright">&copy; 2020</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
