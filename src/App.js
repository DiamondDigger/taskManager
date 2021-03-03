import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

//components
import UserTable from "./components/UserTable";
import FullUserTable from "./components/FullUserTable";
import Layout from "./components/Layout";
import ListOfTasks from "./components/Tasks/ListOfTasks";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
