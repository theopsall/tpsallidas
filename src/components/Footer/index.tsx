import { Button } from "antd";
import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import "./index.css";
import { SiGooglescholar } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="page-footer">
      <Button
        type="text"
        href="https://scholar.google.com/citations?user=478yYkIAAAAJ&hl=el"
        target="_blank"
        icon={<SiGooglescholar />}
        size="large"
      />
      <Button
        type="text"
        href="https://github.com/theopsall"
        target="_blank"
        icon={<GithubOutlined />}
        size="large"
      />
      <Button
        type="text"
        href="https://www.linkedin.com/in/tpsallidas/"
        target="_blank"
        icon={<LinkedinFilled />}
        size="large"
      />
      <Button
        type="text"
        href="https://twitter.com/TheoPsallidas"
        target="_blank"
        icon={<TwitterOutlined />}
        size="large"
      />
    </footer>
  );
};
export default Footer;
