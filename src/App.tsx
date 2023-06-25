import { useLayoutEffect } from "react";
import { Actions } from "reducers/actions";
import { useDispatch } from "reducers/store";
import GithubService from "services/GithubService";
import "./App.css";
import Home from "./scenes/Home";

const App = () => {
  const dispatch = useDispatch();
  const setRepos = (payload: any) =>
    dispatch({ type: Actions.SetRepos, payload });

  useLayoutEffect(() => {
    GithubService.getRepositories("theopsall").then((repositories) => {
      const nonForkedRepositories = repositories.filter(
        (repository) => !repository.fork
      );
      nonForkedRepositories.sort((a, b) => {
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      });
      setRepos(nonForkedRepositories);
    });
  });

  return <Home />;
};

export default App;
