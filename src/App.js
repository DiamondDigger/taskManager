import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

//components

import UserTable from "./components/UserTable";
import FullUserTable from "./components/FullUserTable";
import Layout from "./components/Layout";
import ListOfTasks from "./components/Tasks/ListOfTasks";

function App() {
  return (
    <div className="App">
      <h1>React is Here!</h1>
      <BrowserRouter>
        <Layout />
        <Switch>
          <Route path="/view1" component={ListOfTasks} />
          <Route path="/view2" component={UserTable} />
          <Route path="/view3" component={FullUserTable} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
