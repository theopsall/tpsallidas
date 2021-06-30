import React, { useMemo } from "react";
import { Actions } from "../../../../reducers/actions";
import { Screens } from "../../../../reducers/screens";
import { useDispatch } from "../../../../reducers/store";

const App = () => {
  const dispatch = useDispatch();
  const setDisplayedScreen = (payload: any) =>
    dispatch({ type: Actions.SetDisplayedScreen, payload });

  const avatar = useMemo(() => <div className="avatar"></div>, []);


  return (
    <main className="page lanidng-page">
      <section className="portfolio-block block-intro">
        <div className="container">
          {avatar}
          <div className="about-me">
            <p>
              I am currently a Ph.D. candidate student. I hold an MSc in Data
              Science and a BSc in Computer Science. I also work as a software
              developer and research associate.
            </p>

            <span
              className="btn btn-outline-primary"
              onClick={() => setDisplayedScreen(Screens.AboutMe)}
            >
              About me
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
