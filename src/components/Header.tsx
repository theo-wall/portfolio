import Typed from "typed.js";
import { useEffect, useRef } from "react";

type HeaderProps = {
  welcomeMessage: string;
  subText: string;
};

const Header = (props: HeaderProps) => {
  //   const el = useRef(null);

  //   const typed = useRef(null);

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
  }, []);

  return (
    <>
      <pre className="terminal-header">{props.welcomeMessage}</pre>
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
