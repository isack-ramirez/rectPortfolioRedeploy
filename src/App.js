import "./App.css";
import MyNavbar from "./components/Navbar";
import {HashRouter, Switch, Route } from "react-router-dom";
import Mainhero from "./components/Mainhero";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import BottomDeco from "./components/BotomDeco";


function App() {
  return (
    <div className="App">
      <HashRouter >
        <MyNavbar />
        <Switch>
          <Route  path="/" exact component={Mainhero} />
          <Route  path="/technologies" exact component={Techs} />
          <Route  path="/projects" exact component={Projects} />
        </Switch>
      </HashRouter>
      <BottomDeco/>
    </div>
  );
}

export default App;