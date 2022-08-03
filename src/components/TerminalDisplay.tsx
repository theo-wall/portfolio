import "../App.css";
import { commandResponses, validCommands } from "../responses";
import { useEffect, useState } from "react";
import Header from "./Header";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

type TerminalProps = {
  prompt: string;
};

const TerminalDisplay = (props: TerminalProps) => {
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: scroll, behavior: "smooth" });
  }, [scroll]);

  const handleCommand = (input: string) => {
    const inputCommand = input.toLowerCase();
    if (validCommands.includes(inputCommand)) {
      switch (inputCommand) {
        case "about":
        case "projects":
        case "skills":
        case "repo":
        case "resume":
        case "contact":
        case "help":
          const element = (
            <div className="terminal-output">
              {commandResponses[inputCommand]}
            </div>
          );
          setOutput([...output, element]);
      }
    } else if (inputCommand === "clear") {
      setOutput([]);
    } else {
      const element = (
        <div className="terminal-output">
          <span>
            <span className="input-prompt">→</span>
            {inputCommand}
          </span>
          <p>Command not recognized. Try typing 'help' for commands</p>
        </div>
      );
      setOutput([...output, element]);
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
