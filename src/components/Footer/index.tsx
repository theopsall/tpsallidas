import { Button } from "antd";
import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";

const App = () => {
  return (
    <footer className="page-footer">
      <Button
        type="text"
        href="https://github.com/theopsall"
        target="_blank"
        icon={<GithubOutlined />}
        size="large"
      />
      <Button
        type="text"
        href="https://twitter.com/TheoPsallidas"
        target="_blank"
        icon={<TwitterOutlined />}
        size="large"
      />

      <Button
        type="text"
        href="https://twitter.com/TheoPsallidas"
        target="_blank"
        icon={<LinkedinFilled />}
        size="large"
      />
    </footer>
  );
};
export default App;
