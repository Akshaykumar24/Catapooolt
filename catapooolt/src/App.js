import "./App.css";
import MyEditor from "./components/TextEdi";
import Explore from "./components/Explore";
import Create from "./components/Create";
import Nav from "./components/navbar";
import Donate from "./components/Donate";
import Landing from "./components/Landing";
import Search from "./components/search";
import { LogSign } from "./components/login/loginsignup";
import { First } from "./components/how it works/Firstcomp";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <MyEditor /> */}

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          Hello User
          <LogSign />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/how">
          <First />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
