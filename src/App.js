import "./App.css";
import { Switch, Route } from "react-router-dom";

//layouts
import LandingPageLayout from "./layouts/LandingPage";

//pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route path="/">
        <LandingPageLayout heading="Remote Destinations">
          <HomePage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
