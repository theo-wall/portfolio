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
    strings: [
      "Welcome to my site blah blah blah I'm still working on it but I want a long string here so it looks cool",
    ],
    typeSpeed: 20,
    loop: false,
    cursorChar: "",
  };

  const options2 = {
    strings: [
      "this is now different text check check check check out the inputs",
    ],
    typeSpeed: 20,
    startDelay: 4000,
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
    </>
  );
};

export default Header;
