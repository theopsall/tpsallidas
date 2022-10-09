import { useLayoutEffect } from "react";
import { Actions } from "reducers/actions";
import { useDispatch } from "reducers/store";
import GithubService from "services/GithubService";
import "./App.less";
import Home from "./scenes/Home";

const App = () => {
  const dispatch = useDispatch();
  const setRepos = (payload: any) =>
    dispatch({ type: Actions.SetRepos, payload });

  useLayoutEffect(() => {
    GithubService.getRepositories("theopsall").then((repositories) => {
      setRepos(repositories);
    });
  }, []);

  return <Home />;
};

export default App;
