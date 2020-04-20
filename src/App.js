// React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/Home/Home";
import ForgetMeNot from "./pages/ForgetMeNot/ForgetMeNot";
import UndefinedPage from "./pages/UndefinedPage/UndefinedPage";

// Styling
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/forgetmenot" component={ForgetMeNot} />
        <Route path="/*" component={UndefinedPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
