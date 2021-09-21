import "./App.css";
import MyNavbar from "./components/Navbar";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Mainhero from "./components/Mainhero";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import BottomDeco from "./components/BotomDeco";


function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <MyNavbar />
        <switch>
          <Route exact path="/" component={Mainhero} />
          <Route path="/technologies" component={Techs} />
          <Route path="/projects" component={Projects} />
        </switch>
      </HashRouter>
      <BottomDeco/>
    </div>
  );
}

export default App;