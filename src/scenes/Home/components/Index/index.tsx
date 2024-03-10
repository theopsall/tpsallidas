import {
  GithubOutlined,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { SiGooglescholar } from "react-icons/si";
import landingPage from "../../../../assets/images/landing-page.jpg";
import "./index.css";

const App = () => {
  return (
    <div
      className="main-card"
      style={{
        backgroundImage: `url(${landingPage})`,
      }}
      id="start"
    >
      <div className="portfolio">
        <div className="border-avatar">
          <Avatar
            className="avatar"
            src="https://avatars.githubusercontent.com/theopsall"
            size="large"
            alt="Theo Psallidas avatar"
          />
        </div>
        <p>
          Currently immersed in my Ph.D. journey at the University of Thessaly,
          I boast a rich academic background with a BSc in Computer Science and
          an MSc in Data Science, earned through a collaboration between the
          University of Peloponnese and the National Centre for Scientific
          Research “Demokritos”. My passion for technology also finds an outlet
          in my roles as a Software Developer and Research Associate.
        </p>
        <div className="social-media">
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
        </div>
        <Button
          type="primary"
          href="#Projects"
          shape="round"
          className="projects-btn"
        >
          Projects
        </Button>
      </div>
    </div>
  );
};
export default App;
