import "../App.css";
import { commandResponses, validCommands } from "../responses";
import { useState } from "react";
import Header from "./Header";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

type TerminalProps = {
  prompt: string;
};

const TerminalDisplay = (props: TerminalProps) => {
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);
  const [scroll, setScroll] = useState<number>(0);

  const handleCommand = (input: string) => {
    const inputCommand = input.toLowerCase();
    if (validCommands.includes(inputCommand)) {
      switch (inputCommand) {
        case "test":
        case "all":
        case "about":
        case "projects":
        case "skills":
        case "repo":
        case "resume":
        case "contact":
        case "website":
        case "clear":
        case "help":
          const element = (
            <div className="terminal-output">
              {commandResponses[inputCommand]}
            </div>
          );
          setOutput([...output, element]);
      }
      setTimeout(() => {
        window.scrollTo({ top: scroll, left: 0, behavior: "smooth" });
      }, 50);
    } else if (inputCommand === "clear") {
      setOutput([]);
    }
  };

  return (
    <div className="terminal-backdrop">
      <div className="terminal-content">
        <Header />
        <TerminalOutput output={output} />
        <TerminalInput
          prompt={props.prompt}
          handleCommand={handleCommand}
          setOutput={setOutput}
          setScroll={setScroll}
        />
      </div>
    </div>
  );
};

export default TerminalDisplay;
