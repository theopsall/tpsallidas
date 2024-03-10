import { useLayoutEffect } from "react";
import "./App.css";
import { Actions } from "./reducers/actions";
import { useDispatch, useSelector } from "./reducers/store";
import Home from "./scenes/Home";
import GithubService from "./services/GithubService";
import { ConfigProvider, theme, Button, Card } from "antd";
import React from "react";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const setRepos = (payload: any) =>
    dispatch({ type: Actions.SetRepos, payload });
  const isDarkMode = useSelector((state) => state.darkMode);

  const { defaultAlgorithm, darkAlgorithm } = theme;
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

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Home />;
    </ConfigProvider>
  );
};

export default App;
