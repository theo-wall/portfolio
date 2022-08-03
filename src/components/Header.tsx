import Typed from "typed.js";
import { useEffect } from "react";
import { banner } from "../constants";
import { Redirect, gitHub, linkedIn, mail } from "../constants";

const Header = () => {
  const redirectHandler = (redirectTo: string): void => {
    if (redirectTo === Redirect.GITHUB) {
      window.open("https://github.com/Theo-Wall");
    }
    if (redirectTo === Redirect.LINKEDIN) {
      window.open("https://www.linkedin.com/in/theo-wall-398452211/");
    }
    if (redirectTo === Redirect.MAIL) {
      window.open("mailto:theo.wall11@gmail.com");
    }
  };

  const options1 = {
    strings: [
      "Welcome to my site, my name is Theo Wall and I'm an aspiring Web Developer in Calgary, AB",
    ],
    typeSpeed: 20,
    loop: false,
    cursorChar: "",
  };

  const options2 = {
    strings: [
      "Try typing some things in to the input to find out more about me, or type 'help' to check out the commands",
    ],
    typeSpeed: 20,
    startDelay: 3200,
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
  }, []);

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
        <pre className="terminal-banner">{banner}</pre>
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
