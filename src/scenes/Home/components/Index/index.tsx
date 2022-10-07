import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import landingPage from "assets/images/landing-page.jpg";
import React from "react";
import "./index.css";
const App = () => {
  return (
    <main className="page landing-page">
      <img className="background-img" src={landingPage} alt="" />
      <section className="portfolio-block block-intro">
        <div className="container">
          <div className="about-me">
            <Avatar
              className="avatar"
              src="https://avatars.githubusercontent.com/theopsall"
              size={"large"}
            />

            <p>
              I am currently a Ph.D. candidate at the University of Thessaly.
              Additionally, I hold a BSc in computer science from the University
              of Thessaly and MSc in Data Science from the University of
              Peloponnese and the National Centre for Scientific Research
              “Demokritos”. I also work as a Lead Software Developer and
              research associate.
            </p>
            <div className="social-media">
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
            </div>
            <Button type="text" href="#Projects">
              <span className="btn btn-outline-primary">Projects</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
