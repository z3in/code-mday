import React, { useState } from "react";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar/";
import MainPage from "./components/Mainpage/";
import Page1 from "./components/Page1/";
import Page2 from "./components/Page2/";

import { UserContext } from "./components/context/UserContext";

import { useTransition, animated } from "react-spring";

function App() {
  const location = useLocation();
  const [user, setUser] = useState("No Name");

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    config: { tension: 220, friction: 50 },
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="container">
          <header>
            <NavBar />
          </header>
          <main>
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Switch location={item}>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/page1" component={Page1} />
                  <Route exact path="/page2" component={Page2} />
                </Switch>
              </animated.div>
            ))}
          </main>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
