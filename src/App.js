import "./App.css";

import Album from "./components/Album/Album";
import Links from "./components/Links/Links";

function App() {
  return (
    <div className="main">
      <div className="wrapper">
        <div className="album">
          <Album />
        </div>
        <div className="links">
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
