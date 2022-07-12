import Typed from "typed.js";
import { useEffect } from "react";
import "../constants";
import { Redirect, gitHub, linkedIn, mail } from "../constants";

type HeaderProps = {
  welcomeMessage: string;
  subText: string;
};

const Header = (props: HeaderProps) => {
  const redirectHandler = (redirectTo: string): void => {
    if (redirectTo === Redirect.GITHUB) {
      window.open("https://github.com/Theo-Wall");
    }
    if (redirectTo === Redirect.LINKEDIN) {
      window.open("https://www.linkedin.com/in/theo-wall-398452211/");
    }
    if (redirectTo === Redirect.MAIL) {
      //   window.open("mailto:theo.wall11@gmail.com");
    }
  };

  const options1 = {
    strings: ["Welcome to my site, as you can tell its a work in progress."],
    typeSpeed: 20,
    loop: false,
    cursorChar: "",
  };

  const options2 = {
    strings: [
      "For now take a look at my resume</a> and come back later. Feel free to type whatever below.",
    ],
    typeSpeed: 20,
    startDelay: 2000,
    loop: false,
    cursorChar: "",
  };

  useEffect(() => {
    const typed1 = new Typed(".subText-typing", options1);
    const typed2 = new Typed(".explain-typing", options2);
    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  });

  return (
    <>
      <div className="terminal-header">
        <div className="logo-container">
          <div>
            <pre
              className="gitHub-logo"
              onClick={() => {
                redirectHandler("github");
              }}
            >
              {gitHub}
            </pre>
          </div>
          <div>
            <pre
              className="linkedIn-logo"
              onClick={() => {
                redirectHandler("linkedIn");
              }}
            >
              {linkedIn}
            </pre>
          </div>
          <div>
            <pre
              className="mail-logo"
              onClick={() => {
                redirectHandler("mail");
              }}
            >
              {mail}
            </pre>
          </div>
        </div>
        <pre className="terminal-banner">{props.welcomeMessage}</pre>
      </div>

      <div>
        <span className="subText-typing"></span>
      </div>
      <br />
      <div>
        <span className="explain-typing"></span>
      </div>
      <div className="resume-container">
        <a
          href="/documents/theoWallResume.pdf"
          download="Theo Wall - Resume"
          className="resume-link"
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default Header;
