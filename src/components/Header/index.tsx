import React from "react";
import { Actions } from "reducers/actions";
import { Screens } from "reducers/screens";
import { useDispatch } from "reducers/store";
import Typed from "react-typed";

const App = () => {
  const dispatch = useDispatch();
  const setDisplayedScreen = (payload: any) =>
    dispatch({ type: Actions.SetDisplayedScreen, payload });

  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container">
        <span
          className="navbar-brand logo"
          onClick={() => setDisplayedScreen(Screens.Index)}
        >
          <Typed
            strings={["Theodoros Psallidas"]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </span>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <span
                className="nav-link"
                onClick={() => setDisplayedScreen(Screens.AboutMe)}
              >
                About Me
              </span>
            </li>
            <li className="nav-item" role="presentation">
              <span
                className="nav-link"
                onClick={() => setDisplayedScreen(Screens.Projects)}
              >
                Projects
              </span>
            </li>
            <li className="nav-item" role="presentation">
              <span
                className="nav-link"
                onClick={() => setDisplayedScreen(Screens.Contact)}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default App;
