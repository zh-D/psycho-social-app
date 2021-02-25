import React, { Suspense, lazy } from "react";
import ReactDom from "react-dom";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Layout from "./Layout";

import MyErrorBoundary from "./components/MyErrorBoundary";
const Home = lazy(() => import("./pages/Home"));
const Brand = lazy(() => import("./pages/Brand"));
const PourOut = lazy(() => import("./pages/PourOut"));
const Listener = lazy(() => import("./pages/Listener"));
const Serve = lazy(() => import("./pages/Serve"));
const Article = lazy(() => import("./pages/Article"));
const HelpGround = lazy(() => import("./pages/HelpGround"));

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <MyErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/brand">
                <Brand />
              </Route>
              <Route path="/pour-out">
                <PourOut />
              </Route>
              <Route path="/listener">
                <Listener />
              </Route>
              <Route path="/serve">
                <Serve />
              </Route>
              <Route path="/articles">
                <Article />
              </Route>
              <Route path="/help">
                <HelpGround />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </MyErrorBoundary>
      </Layout>
    </Router>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
