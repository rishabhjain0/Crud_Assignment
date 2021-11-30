
import {
Switch, Route
} from "react-router-dom";
import Header from "./components/header/header.component.";
import Form from "./pages/form/form.component";
import HomePage from "./pages/home-page/home-page.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/form" component={Form} />
      </Switch>
    </div>

  );
}

export default App;
